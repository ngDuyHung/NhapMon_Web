document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("i.fa-solid");
  const navMenu = document.querySelector("nav ul");
  const headerImage = document.querySelector("header>img:first-child");

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

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    document.body.setAttribute("data-scrolled", "true");
  } else {
    document.body.removeAttribute("data-scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.querySelector(".page-1>p>.btn_learnmore");
  const formOverlay = document.getElementById("signupForm");
  const closeFormBtn = document.getElementById("closeForm");
  const form = document.getElementById("form");
  // Mở form khi nhấn Learn More
  learnMoreBtn.addEventListener("click", function () {
    formOverlay.style.display = "flex";
  });
  // Đóng form
  closeFormBtn.addEventListener("click", function () {
    formOverlay.style.display = "none";
  });
  // Validation
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  if (name === "" || email === "") {
      alert("Please fill in all fields.");
      e.preventDefault();
   } else {
      alert("Form submitted successfully!");
      formOverlay.style.display = "none";
    }
  });
});

