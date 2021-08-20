function getUser() {
  let container = document.querySelector(".users");
  let current_user = JSON.parse(localStorage.getItem("user"));

  console.log(current_user);

  container.innerHTML = `
    
    <p class="user">user ID: ${current_user[0]}</p>
    <p class="fullname">Full Name: ${current_user[1]}</p>
    <p class="username">Username: ${current_user[2]}</p>
    <p class="password">Password: ${current_user[3]}</p>
    <button onclick="removeUser(${current_user[0]})">Delete</button>

`;
}

function removeUser(id) {
  fetch(`https://fathomless-brook-37596.herokuapp.com/delete_user/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location.href = "./Registration.html";
    });
}

getUser();
