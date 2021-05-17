var btnTop = document.querySelector(".btnGoTop");
btnTop.addEventListener("click", () => {
  let myElement = document.getElementById("MainSection");
  const myTop = myElement.offsetTop;
  window.scroll({
    top: myTop - 200,
    behavior: "smooth",
  });
});
