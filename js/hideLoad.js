let loadConatiner = document.getElementById("loadContainer");
let documentHTML = document.querySelector("html");
documentHTML.style.overflow = "hidden";
setTimeout(() => {
  loadConatiner.classList.add("hideLoadScreen");
  documentHTML.style.overflowY = "scroll";
}, 3000);
