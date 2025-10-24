$(document).ready(function () {
 $.ajax({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    success: function (data) {
      for (let i = 0; i < 18; i++) {
        const product = data[i];
        const card = `
          <div class="text-center mb-3 d-flex flex-column align-items-center p-2 rounded"
               style="width: 200px; height: 300px;"
               data-image="${product.image}"
               data-id="${product.id}"
               data-price="${product.price}"
               data-title="${product.title}">
            <img src="${product.image}" class="img-fluid"
                 style="max-width: 150px; height: 150px; object-fit: contain;" alt="">
            <p class="fw-bold text-center overflow-hidden text-truncate w-100"
               style="max-height: 3em;">${product.title}</p>
            <button class="btn btn-sm add-to-cart-btn  fw-bold">Add to Cart</button>
          </div>
        `;
        $("#aq").append(card);
      }
 
      $("#aq").addClass("d-flex flex-wrap justify-content-center gap-3 w-100");
    },
    error: function (error) {
      console.error("Error fetching products:", error);
    }
  });
 
 
$("#productForm").on("submit", function (e) {
  e.preventDefault();
  const formArray = $(this).serializeArray();
  const formData = {};
  formArray.forEach(({ name, value }) => {
    formData[name] = value;
  });
  const card = `
    <div class="text-center mb-3 d-flex flex-column align-items-center p-2 rounded"
         style="width: 200px; height: 300px;"
         data-image="${formData.image}"
         data-price="${formData.price}"
         data-title="${formData.title}">
      <img src="${formData.image}" class="img-fluid"
           style="max-width: 150px; height: 150px; object-fit: contain;" alt="">
      <p class="fw-bold text-center overflow-hidden text-truncate w-100"
         style="max-height: 3em;">${formData.title}</p>
      <button class="btn btn-sm add-to-cart-btn btn-pink fw-bold">Add to Cart</button>
    </div>
  `;
  $("#aq").append(card);
});
 
});
 