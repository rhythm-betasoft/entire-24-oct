$(document).ready(function () {

  $(".navbar").hide().fadeIn(2000);
  $.get({
    url: "https://fakestoreapi.com/products",
    success: function(data) {
      console.log(data);
      let i = 0;

      while (i < 18) {
        const product = data[i];
        const card = `
          <div class="text-center mb-3 d-flex flex-column align-items-center p-2  rounded" style="width: 200px; height: 300px;"data-image="${product.image}" data-id="${product.id}" data-price="${product.price}" data-title="${product.title}">
            <img src="${product.image}" class="img-fluid z" style="max-width: 150px; height: 150px; object-fit: contain;" alt="">
            <p class="z fw-bold text-center overflow-hidden text-truncate w-100" style="max-height: 3em;">${product.title}</p>

            <button class="btn btn-sm add-to-cart-btn   btn-pink  fw-bold " style="background-color:pink" >Add to Cart</button>
          </div>
        `;
        $("#aq").append(card);
        i++;
      }
      $("#aq").addClass("d-flex flex-wrap justify-content-center gap-3 w-100");

      $(".z").css({
        position: "relative",
        left: "-300px", 
        display: "block"
      }).animate({
        left: "0px"
      }, 1500);
    }
  });

  $(document).on("click", ".add-to-cart-btn", function() {
    const data1 = {
        image: $(this).parent().data("image"),
      id: $(this).parent().data("id"),
      price: $(this).parent().data("price"),
      title: $(this).parent().data("title")
    };
    console.log(data1);
     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(data1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("cartCount", cartItems.length);
  $("#cart-count").text(cartItems.length);
  // window.location.href = "cart.html";
  });
});
