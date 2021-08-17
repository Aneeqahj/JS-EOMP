let productContainer = document.querySelector(".product-container");
let allBtn = document.querySelector(".categories.all");
let footwearBtn = document.querySelector(".categories.footwear");
let apparelBtn = document.querySelector(".categories.apparel");
let accessoriesBtn = document.querySelector(".categories.accessories");
let graffitiBtn = document.querySelector(".categories.graffiti");

function productCard(card) {
  console.log(card);
  let displayedCard = `
  <div class="border">
  <div class="product">
  <img
    class="image"
    src="./Images/d24-Nike-Air-Jordan-Point-Lane-CZ4166-006-side-1f3.jpg"
  />
  <h4 class="name">${card[1]}</h4>
  <h5 class="price">${card[2]}</h5>
  <p class="description">${card[4]}</p>
  <div class="button-group">
    <button class="icons" onclick="addToCart(${card[0]})">
      <i class="fas fa-shopping-cart"></i>
    </button>
    <button class="icons" onclick="editProduct(${card[0]})">
      <a href="./editproducts.html"><i class="far fa-edit"></i></a>
    </button>
    <button onclick="deleteProduct(${card[0]})" class="icons">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</div>
</div>
    `;
  return displayedCard;
}

function editProduct(id) {
  localStorage.setItem("to edit", JSON.stringify(id));

  window.location.href = "editproducts.html";
}

allBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  productList.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

footwearBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let footwear = productList.filter((card) => {
    return card.productCategory === "Footwear";
  });
  productContainer.innerHTML = "";
  footwear.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

apparelBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let apparel = productList.filter((card) => {
    return card.productCategory === "Apparel";
  });
  productContainer.innerHTML = "";
  apparel.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

accessoriesBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let accessories = productList.filter((card) => {
    return card.productCategory === "Accessories";
  });
  productContainer.innerHTML = "";
  accessories.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

graffitiBtn.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let graffiti = productList.filter((card) => {
    return card.productCategory === "Graffiti";
  });
  productContainer.innerHTML = "";
  graffiti.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

// productList.forEach((card) => {
//   console.log(card);
//   productContainer = "";
//   productContainer.innerHTML += productCard(card);
// });

// Delete function

function deleteProduct(index) {
  console.log(index);
  // http://127.0.0.1:5000/delete_product/${index}/
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    let token = localStorage.getItem("jwt_token");

    console.log(token);
    fetch(
      `https://fathomless-brook-37596.herokuapp.com/delete_product/${index}/`,
      {
        headers: {
          Authorization: `jwt ${token}`,
        },
      }
    )
      .then((respose) => respose.json())
      .then((data) => console.log(data));
    getProducts();
  }
}

function getProducts() {
  fetch("https://fathomless-brook-37596.herokuapp.com/view/")
    .then((respose) => respose.json())
    .then((data) => {
      console.log(data.data);
      let products = data.data;

      productContainer.innerHTML = "";

      products.forEach(
        (product) => (productContainer.innerHTML += productCard(product))
      );
    });
}

getProducts();
