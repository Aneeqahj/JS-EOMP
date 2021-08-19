let login_form = document.querySelector(".login-form");
let reg_form = document.querySelector(".register-form");

if (login_form != null) {
  login_form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user_details = {
      username: document.querySelector(".username").value,
      password: document.querySelector(".password").value,
    };

    fetch("https://fathomless-brook-37596.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_details),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data["access_token"]) {
          console.log(data);
          localStorage.setItem("jwt_token", data["access_token"]);

          window.location.href = "products.html";
        }
      });
  });
}

if (reg_form != null) {
  reg_form.addEventListener("submit", (e) => {
    //  PREVENT THE DEFAULT ACTION OF THE FORM
    e.preventDefault();

    //  CREATE AN OBJECT CONTAINING ALL THE INPUTS VALUES
    let new_user = {
      full_name: document.querySelector("#name").value,
      username: document.querySelector("#username").value,
      email_address: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    console.log(new_user);

    fetch("https://fathomless-brook-37596.herokuapp.com/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // let current_user = res.current_user;
        // localStorage.setItem("current_user", JSON.stringify(current_user));

        window.location.href = "index.html";
      });
  });
}

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let container = document.querySelector(".product-container");

  console.log(cart);

  container.innerHTML = "";

  cart.forEach((item) => {
    console.log(item);
    let detail = item[0];

    container.innerHTML += `
      <div class="border">
        <div class="product">
          <img
            class="image"
            src="./Images/e8e-Patta-Basic-Hooded-Crew-Pale-Khaki-POC-BC-HS-016-front-deb.jpg"
            alt="Apparel"
          />
          <h4 class="name">${detail[1]}</h4>
          <h5v class="price">${detail[2]}</h5v>
          <p class="description">${detail[3]}</p>
          <div class="button-group">
            <button onclick="removeFromCart(${detail[0]})") class="icons"><i class="far fa-trash-alt">remove</i></button>
          </div>
        </div>
      </div>
    `;
  });
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let updatedCart = cart.filter((item) => item[0][0] != id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  getCart();
  getTotal();
}

getCart();

function getTotal() {
  let total = 0;
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.forEach(
    (item) => (total += parseInt(item[0][2].substring(1, item[0][2].length)))
  );

  document.querySelector(".total").innerHTML = "Your total is: R" + total;
}
