$(document).ready(function () {
    $(".navbar").hide().fadeIn(2000);

  const data = JSON.parse(localStorage.getItem("cartItems")) || [];
  let total = 0;
  const addedIds = []; 

  if (data.length > 0) {
    data.forEach(item => {
      total += item.price;
      item.quantity = item.quantity || 1;
      if (!addedIds.includes(item.id)) { 
        addedIds.push(item.id);

        const card = `
          <div class="card mb-3 slight-rounded" style="max-width: 700px;" data-id="${item.id}">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center justify-content-center p-2">
                <img src="${item.image}" class="img-fluid rounded-start" style="max-height: 150px; object-fit: contain;" alt="${item.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text fw-bold">Price: $${item.price}</p>

                  <button class="btn btn-secondary btn-sm quantity-btn decrease-qty" data-id="${item.id}">-</button>
                  <span class="mx-2 quantity" data-id="${item.id}">${item.quantity}</span>
                  <button class="btn btn-secondary btn-sm quantity-btn increase-qty" data-id="${item.id}">+</button>

                  <button class="btn btn-danger btn-sm remove-item" data-id="${item.id}" data-price="${item.price}">Remove</button>
                </div>
              </div>
            </div>
          </div>
        `;
        $(".main-cart").append(card);
      }
     else {
  item.quantity += 1;
  $(`.quantity[data-id='${item.id}']`).text(item.quantity);
}
    });
  }
  else {
    $(".main-cart").html("<p class='text-muted'>Your cart is empty.</p>");
  }

  const totalCard = `
    <div class="card mt-3" style="max-width: 700px;" id="total-card">
      <div class="card-body">
        <h5 class="card-title">Total Price: $<span class="total-price">${total}</span></h5>
      </div>
    </div>
  `;
  $(".total").append(totalCard);

  $(document).on("click", ".remove-item", function () {
    const idToRemove = $(this).data("id");
    const priceToRemove = parseFloat($(this).data("price"));

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.id !== idToRemove);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    total -= priceToRemove;
    $(".total-price").text(total.toFixed(2));

    $(this).closest(".card").remove();

    if (cartItems.length === 0) {
      $(".main-cart").html("<p class='text-muted'>Your cart is empty.</p>");
      $("#total-card").remove();
    }
  });
});
