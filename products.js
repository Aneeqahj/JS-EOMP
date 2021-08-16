let productContainer = document.querySelector(".product-container");
let allBtn = document.querySelector(".categories.all");
let footwearBtn = document.querySelector(".categories.footwear");
let apparelBtn = document.querySelector(".categories.apparel");
let accessoriesBtn = document.querySelector(".categories.accessories");
let graffitiBtn = document.querySelector(".categories.graffiti");

let productList = [
  {
    id: "1",
    imgUrl: "./Images/d24-Nike-Air-Jordan-Point-Lane-CZ4166-006-side-1f3.jpg",
    imgAlt: "Sneaker",
    productCategory: "Footwear",
    productName: "Nike Jordan",
    productPrice: "R2599.00",
    productDescription: "Nike Air Jordan. Jordan Point Lane",
  },
  {
    id: "2",
    imgUrl:
      "/Images/e8e-Patta-Basic-Hooded-Crew-Pale-Khaki-POC-BC-HS-016-front-deb.jpg",
    imgAlt: "Apparel",
    productCategory: "Apparel",
    productName: "Patta",
    productPrice: "R1699.00",
    productDescription: "Basic nude Patta Hoodie",
  },
  {
    id: "3",
    imgUrl: "./Images/8f9-Casio-G-Shock-GA-2000HC-3ADR-200M-ebe.jpg",
    imgAlt: "Accessories",
    productCategory: "Accessories",
    productName: "Casio",
    productPrice: "R3999.00",
    productDescription: "Casio G-Shock 200M medium core",
  },
  {
    id: "4",
    imgUrl: "/Images/mega-colors.jpg",
    imgAlt: "Graffiti",
    productCategory: "Graffiti",
    productName: "Montana",
    productPrice: "R95.00",
    productDescription: "Montana Mega spray paint",
  },
];

function productCard(card) {
  console.log(card);
  let displayedCard = `
  <div class="border">
  <div class="product">
  <img
    class="image"
    src="${card.imgUrl}"
    alt="${card.imgAlt}"
  />
  <h4 class="name">${card.productName}</h4>
  <h5 class="price">${card.productPrice}</h5>
  <p class="description">${card.productDescription}</p>
  <div class="button-group">
    <button class="icons">
      <i class="fas fa-shopping-cart"></i>
    </button>
    <button class="icons">
      <a href="./editproducts.html"><i class="far fa-edit"></i></a>
    </button>
    <button onclick="deleteProduct(${card.id})" class="icons">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</div>
</div>
    `;
  return displayedCard;
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

productList.forEach((card) => {
  console.log(card);
  // productContainer = "";
  productContainer.innerHTML += productCard(card);
});

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
    createCards();
  }
}

function getProducts() {
  fetch("https://fathomless-brook-37596.herokuapp.com/view/")
    .then((respose) => respose.json())
    .then((data) => {
      console.log(data);
    });
}

getProducts();
