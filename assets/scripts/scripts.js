// JavaScript for animating text
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        document.getElementById('text-1'),
        document.getElementById('text-2'),
    ]; // Array of text elements to cycle through

    let currentIndex = 0;

    function changeText() {
        texts[currentIndex].classList.remove('active1'); // Fade out current text
        currentIndex = (currentIndex + 1) % texts.length; // Move to next text
        texts[currentIndex].classList.add('active1'); // Fade in new text
    }

    setInterval(changeText, 2000); // Change text every 2 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const firstSection = document.querySelector("#first-section");
    let lastScrollTop = 0;

    // Calculate the height of the first section
    const firstSectionHeight = firstSection.offsetHeight;

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > firstSectionHeight) {
            header.classList.add("sticky");

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add("hidden");
            } else {
                // Scrolling up
                header.classList.remove("hidden");
            }
        } else {
            header.classList.remove("sticky");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
});

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const head_logo = document.getElementById("head-logo");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");
const contacus = document.getElementById('text-1');
const contacusnumber = document.getElementById('text-2');

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
  hamburgerBtn.classList.toggle("active");
  head_logo.classList.toggle("active");
  contacus.classList.toggle("active");
  contacusnumber.classList.toggle("active");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
