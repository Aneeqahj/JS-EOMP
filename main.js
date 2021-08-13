// Login
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let full_name = document.querySelector("#name").value;
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  register(full_name, email, username, password);
});

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://fathomless-brook-37596.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "/products.html";
      }
    });
}

// Registration
function register(full_name, email, username, password) {
  console.log(full_name, email, username, password);
  fetch("https://fathomless-brook-37596.herokuapp.com/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: full_name,
      email: email,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
