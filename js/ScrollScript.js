const links = document.querySelectorAll("a.linkNavbar");

links.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let myElement = document.getElementById(item.getAttribute("data-link"));
    const myTop = myElement.offsetTop;
    window.scroll({
      top: myTop - 200,
      behavior: "smooth",
    });
  });
});
