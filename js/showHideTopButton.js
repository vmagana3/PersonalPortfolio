window.onscroll = () => {
  var elementTriggerToShow = document.getElementById("ProjectsSection");
  var topScroll = elementTriggerToShow.getBoundingClientRect().top - 300;
  var btnTop = document.querySelector(".btnGoTop");

  if (topScroll < 0) {
    btnTop.style.display = "inline";
  } else if (topScroll >= 600) {
    btnTop.style.display = "none";
  }
};
