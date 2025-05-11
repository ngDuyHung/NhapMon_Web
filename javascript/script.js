// window.addEventListener("scroll", function() {
//     var nav = document.querySelector("nav");
//     if(window.scrollY>30){
//         nav.style.backgroundColor=rgb(211, 108, 18);
//     }else{
//         nav.style.backgroundColor= "none";
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("i.fa-solid");
  const navMenu = document.querySelector("nav ul");
  const headerImage = document.querySelector("header>img");

  let isMenuOpen = false;

  menuButton.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle("active");

    // Sau 300ms mới đổi icon để hiệu ứng chạy mượt
    menuButton.classList.remove("fa-bars");
    menuButton.classList.add("fa-xmark");
    menuButton.classList.add("fa-animating");
    setTimeout(() => {
      if (isMenuOpen) {
        headerImage.classList.add("active");
      } else {
        menuButton.classList.remove("fa-xmark");
        menuButton.classList.add("fa-bars");
        setTimeout(() => {
          headerImage.classList.remove("active");
        }, 200);
      }

      // Gỡ hiệu ứng xoay sau khi hoàn tất
      menuButton.classList.remove("fa-animating");
    }, 300);
  });
});
