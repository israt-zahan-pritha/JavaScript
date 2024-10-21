const openIcon = document.getElementsByClassName("open-icon");
const closeIcon = document.getElementsByClassName("close-icon");
const accordion = document.getElementsByClassName("accordion-content");

openIcon[0].addEventListener("click", () => {
  accordion[0].style.display = "block";
  openIcon[0].style.display = "none";
  closeIcon[0].style.display = "inline-block";
});

closeIcon[0].addEventListener("click", () => {
  accordion[0].style.display = "none";
  openIcon[0].style.display = "block";
  closeIcon[0].style.display = "none";
});
