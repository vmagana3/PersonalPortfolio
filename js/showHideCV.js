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

//-------------------------------------------------------------------//

let cerBtn = document.querySelector(".CertificationBtn");

cerBtn.addEventListener("click", () => {
  let embebedContainer = document.querySelector(".embebedContainerBG");
  embebedContainer.classList.toggle("showContainer");
});

let closeModal = document.querySelector(".closeModal");
closeModal.addEventListener("click", () => {
  let embebedContainer = document.querySelector(".embebedContainerBG");
  embebedContainer.classList.toggle("showContainer");
});
