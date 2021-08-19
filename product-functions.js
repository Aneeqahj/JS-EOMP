let addForm = document.querySelector(".add-form");
let editForm = document.querySelector(".edit-form");
let forms = document.querySelectorAll(".form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newItem = {
    name: document.querySelector("#name").value,
    price: document.querySelector("#price").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#category").value,
  };

  fetch("https://fathomless-brook-37596.herokuapp.com/adding/", {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// Add to cart

function addToCart(id) {
  fetch("https://fathomless-brook-37596.herokuapp.com/view/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let products = data.data;

      let product = products.filter((product) => product[0] == id);
      let cart_items = JSON.parse(localStorage.getItem("cart"));
      console.log(product);

      if (cart_items == null) {
        cart_items = [];
      }

      cart_items.push(product);
      localStorage.setItem("cart", JSON.stringify(cart_items));
    });
}

// console.log(addForm, editForm, forms);
// function showAddForm() {
//   forms.forEach((form) => {
//     form.style.display = "none";
//   });
//   addForm.style.display = "block";
// }

// function showEditForm() {
//   forms.forEach((form) => {
//     form.style.display = "none";
//   });
//   editForm.style.display = "block";
// }

// showAddForm();

// Populate container

// function populateEdit(index) {
//   console.log(index);
//   let edit_container = document.querySelector(".container-edit");
//   edit_container.innerHTML = `<!-- edit container! form? -->
//   <div class="old-info">
//     <!-- old info -->
//   </div>
//   <form action="https://fathomless-brook-37596.herokuapp.com/update/" method="PUT">
//     <!-- product_name -->
//     <div class="product-div">
//       <label class="product-info" for="product_name"
//         >The Product Name:
//       </label>
//       <input
//         class="product-input"
//         type="text"
//         name="product_name"
//         required
//         placeholder="The Product Name"
//       />
//     </div>

//     <!-- product_price -->
//     <div class="product-div">
//       <label class="product-info" for="product_price"
//         >The Product Price:
//       </label>
//       <input
//         class="product-input"
//         type="text"
//         name="product_price"
//         required
//         placeholder="The Product Price"
//       />
//     </div>

//     <!-- buttons -->
//     <button onclick="editProduct(${index})" type="button">awe</button>
//   </form>
//   <button onclick="showEdit(-1)" class="btn-edit">close</button>`;
// }

// Edit function

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  editProduct();
});
function editProduct() {
  let id = JSON.parse(localStorage.getItem("to edit"));
  console.log(id);
  let inputs = document.querySelectorAll(".inputs");
  let json_info = [];
  let val_space = true;
  inputs.forEach((input) => {
    if (input.value == "") {
      val_space = false;
    }
    json_info.push(input.value);
  });
  if (val_space) {
    let json_dict = {
      name: json_info[0],
      price: json_info[1],
    };
    console.log(json_dict);
    // location.href = "";
    fetch(`https://fathomless-brook-37596.herokuapp.com/update/${id}/`, {
      method: "PUT",
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyOTI1MjYsImlhdCI6MTYyOTIwNjEyNiwibmJmIjoxNjI5MjA2MTI2LCJpZGVudGl0eSI6OX0.-G3K7K_Q2X0QTdP43l9yx8VCCqi52ObfOpu_f4vSoTg",
      },
      body: JSON.stringify(json_dict),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please enter your details!");
  }
}

// const data = { username: "example" };

// fetch("https://example.com/profile", {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
