let productList = [
  {
    imgUrl: "./Images/d24-Nike-Air-Jordan-Point-Lane-CZ4166-006-side-1f3.jpg",
    imgAlt: "p-1",
    productCategory: "Men's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Men's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Men's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Women's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Women's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Accessories",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Accessories",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Accessories",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
  {
    imgUrl: "./images/product-1.jpg",
    imgAlt: "p-1",
    productCategory: "Women's Wear",
    productName: "Grey Sweater",
    productPrice: "R200",
    productDescription: "Grey Woolen Sweater",
  },
];

function productCard(card) {
  let displayedCard = `
    <div data-aos="zoom-in" data-aos-duration="3000" class="product-card">
    <img class="product-image" src="${card.imgUrl}" alt="p-1">
    <h1 class="category">
        ${card.productCategory}
    </h1>
    <h2 class="name">
        ${card.productName}
    </h2>
    <p class="description">
        ${card.productDescription}
    </p>
    <button class="btn">Add to Cart</button>  
</div>
    `;
  return displayedCard;
}

allLink.addEventListener("click", () => {
  productContainer.innerHTML = "";
  allList.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

menLink.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let men = productList.filter((card) => {
    return card.productCategory === "Men's Wear";
  });
  productContainer.innerHTML = "";
  men.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

womenLink.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let women = productList.filter((card) => {
    return card.productCategory === "Women's Wear";
  });
  productContainer.innerHTML = "";
  women.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

accessoriesLink.addEventListener("click", () => {
  productContainer.innerHTML = "";
  let women = productList.filter((card) => {
    return card.productCategory === "Accessories";
  });
  productContainer.innerHTML = "";
  women.forEach((card) => {
    productContainer.innerHTML += productCard(card);
  });
});

productList.forEach((card) => {
  productContainer.innerHTML += productCard(card);
});
