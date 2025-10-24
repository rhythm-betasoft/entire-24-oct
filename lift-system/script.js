$(document).ready(function () {
  let floors = [];
  let currentFloor = 1;
  let requestQueue = [];
  let isMoving = false;
  const cabinHeight = 60;

  function generateFloors() {
    const numFloors = parseInt($("#numFloors").val());
    const floorType = $("#floorType").val();

    floors = [];
    for (let i = 1; i <= numFloors; i++) {
      if ((floorType === "odd" && i % 2 === 0) || (floorType === "even" && i % 2 !== 0)) continue;
      floors.push(i);
    }

    floors.sort((a, b) => a - b);
    const shaftHeight = floors.length * cabinHeight;

    $("#lift-shaft").css("height", shaftHeight + "px").find(".floor").remove();
    $("#floor-buttons").empty();

    floors.slice().reverse().forEach(floor => {
      $("#lift-shaft").append(
        `<div class="floor" data-floor="${floor}" style="height:${cabinHeight}px;">Floor ${floor}</div>`
      );
      $("#floor-buttons").append(
        `<button class="btn ${floor % 2 === 0 ? "btn-danger" : "btn-warning"} floor-btn" data-floor="${floor}">${floor}</button>`
      );
    });

    currentFloor = floors[0];
    updateLiftPosition(currentFloor);
    requestQueue = [];
    updateDirectionIndicator("-");
  }

  function updateLiftPosition(floor) {
    const index = floors.indexOf(floor);
    if (index === -1) return;
    const newBottom = index * cabinHeight;

    $("#lift-cabin").css("bottom", newBottom + "px");
    $("#cabin-floor").text(floor);
    currentFloor = floor;
  }

  function updateDirectionIndicator(dir) {
    $("#directionIndicator").text(dir === "up" ? "Direction: ↑ Up" :
                                  dir === "down" ? "Direction: ↓ Down" : "Direction: -");
    $("#dir-up").toggleClass("active-up", dir === "up");
    $("#dir-down").toggleClass("active-down", dir === "down");
  }

  function openDoors(callback) {
    $("#lift-cabin").addClass("door-open");
    setTimeout(() => {
      $("#lift-cabin").removeClass("door-open");
      setTimeout(callback, 500);
    }, 1500);
  }

  function moveLiftToNext() {
    if (requestQueue.length === 0) {
      isMoving = false;
      updateDirectionIndicator("-");
      return;
    }

    isMoving = true;

    const upFloors = requestQueue.filter(f => f > currentFloor).sort((a, b) => a - b);
    const downFloors = requestQueue.filter(f => f < currentFloor).sort((a, b) => b - a);

    const direction = upFloors.length ? "up" : downFloors.length ? "down" : "-";
    updateDirectionIndicator(direction);

    const nextFloor = (direction === "up" ? upFloors[0] :
                      direction === "down" ? downFloors[0] :
                      requestQueue[0]);

    const newBottom = floors.indexOf(nextFloor) * cabinHeight;

    $("#lift-cabin").stop().animate({ bottom: newBottom + "px" }, 1000, () => {
      currentFloor = nextFloor;
      $("#cabin-floor").text(currentFloor);
      requestQueue = requestQueue.filter(f => f !== nextFloor);
      openDoors(moveLiftToNext);
    });
  }

  $("#generateFloors").click(generateFloors);

  $("#floor-buttons").on("click", ".floor-btn", function () {
    const floor = parseInt($(this).data("floor"));
    if (!floors.includes(floor) || requestQueue.includes(floor) || floor === currentFloor) return;

    requestQueue.push(floor);
    if (!isMoving) moveLiftToNext();
  });

  generateFloors();
});
