const humburger = document.getElementById("humburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("menu-open");
const menuClose = document.getElementsByClassName("menu-close");

if (menuOpen[0] && menuClose[0]) {
  menuOpen[0].addEventListener("click", () => {
    console.log("running...");
    mobileMenu.style.left = "0";
    menuOpen[0].style.display = "none";
    menuClose[0].style.display = "block";
  });

  menuClose[0].addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    menuOpen[0].style.display = "block";
    menuClose[0].style.display = "none";
  });
} else {
  console.log("Elements with class 'menu-open' or 'menu-close' not found.");
}

// ------------Modal------------
const modalBtn = document.getElementById("btn");
const modalBody = document.getElementById("modal");
const body = document.querySelector("body");

body.addEventListener("click", (event) => {
  console.log("body clicked");
  if (event.target.classList.contains("modal")) {
    modalBody.style.display = "none";
  }
});

modalBtn.addEventListener("click", () => {
  modalBody.style.display = "flex";
});
// Show Timeout [ If you want use this method, In that case above two line will be omited]
// modalBtn.addEventListener("click", showModal);

// function showModal() {
//   modal.style.display = "flex";
// }
// setTimeout(showModal, 5000);

// --------------------------------------------------------------------------------------

// const humburger = document.getElementById("humburger");
// const mobailMenu = document.getElementById("mobail-menu");
// const menuOpen = document.getElementsByClassName("menu-open");
// const menuClose = document.getElementsByClassName("menu-close");
// // console.log(menuOpen[0]);

// menuOpen[0].addEventListener("click", () => {
//   console.log("running...");
//   //   console.log("mobailMenu");
//   mobailMenu.style.left = "0";
//   menuOpen[0].style.display = "none";
//   menuClose[0].style.display = "block";
// });

// menuClose[0].addEventListener("click", () => {
//   mobailMenu.style.left = "-100%";
//   menuOpen[0].style.display = "block";
//   menuClose[0].style.display = "none";
// });
// -------------------

// const modalBtn = document.getElementById("btn");
// const modalBody = document.getElementById("modal");
// const body = document.querySelector("body");
// console.log(body);

// body.addEventListener("click", (event) => {
//   console.log("body clicked");
//   // console.log(event.target);
//   if (event.target.classList.value === "modal") {
//     modal.style.display = "none";
//   }
// });

// modalBtn.addEventListener("click", () => {
//   modalBody.style.display = "flex ";
// });
