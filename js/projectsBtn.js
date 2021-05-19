var btnTop = document.querySelector("#btnSeeProjects");
btnTop.addEventListener("click", () => {
  let myElement = document.getElementById("ProjectsSection");
  const myTop = myElement.offsetTop;
  window.scroll({
    top: myTop - 200,
    behavior: "smooth",
  });
});
