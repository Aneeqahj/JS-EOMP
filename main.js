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
