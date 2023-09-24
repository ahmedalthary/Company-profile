let skillsSection = document.querySelector(".skills");
let progressBar = document.querySelectorAll(".prog");
window.onscroll = function () {
  for (let bar of progressBar) {
    if (scrollY >= skillsSection.offsetTop) {
      bar.firstElementChild.style.width = bar.dataset.prog;
    } else {
      bar.firstElementChild.style.width = "0";
    }
  }
};
