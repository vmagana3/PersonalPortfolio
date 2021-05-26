let cvBtn = document.querySelector(".cvBtn");

cvBtn.addEventListener("click", () => {
  let embebedContainer = document.querySelector(".embebedContainer");
  embebedContainer.classList.toggle("showContainer");
});

let closeModalBtn = document.querySelector(".closeModalBtn");
closeModalBtn.addEventListener("click", () => {
  let embebedContainer = document.querySelector(".embebedContainer");
  embebedContainer.classList.toggle("showContainer");
});
