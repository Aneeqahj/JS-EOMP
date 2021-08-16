let addForm = document.querySelector(".add-form");
let editForm = document.querySelector(".edit-form");
let forms = document.querySelectorAll(".form");

console.log(addForm, editForm, forms);
function showAddForm() {
  forms.forEach((form) => {
    form.style.display = "none";
  });
  addForm.style.display = "block";
}

function showEditForm() {
  forms.forEach((form) => {
    form.style.display = "none";
  });
  editForm.style.display = "block";
}

showAddForm();
