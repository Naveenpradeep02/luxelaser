// ================== toggle menu
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-nav");

// Function to open the mobile menu
const handleOpen = () => {
  mobileMenu.classList.add("show-menu");
  open.classList.add("remove-bar");
  close.classList.add("show-x");
};

// Function to close the mobile menu
const handleClose = () => {
  mobileMenu.classList.remove("show-menu");
  open.classList.remove("remove-bar");
  close.classList.remove("show-x");
};

// ✅ Add event listeners
open.addEventListener("click", handleOpen);
close.addEventListener("click", handleClose);

// =================================== scroll number count============================

const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters");
let active = false;

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset > container.offsetTop - container.offsetHeight - 500 &&
    !active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
      let count = 0;

      const updateCount = () => {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount, 15);
        } else {
          counter.innerHTML = target;
        }
      };

      updateCount();
    });

    active = true;
  } else if (
    window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
    active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
    });
    active = false;
  }
});

const arrow = document.getElementById("scrollArrow");
const firstSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > firstSection.offsetHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

// =============================SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");

  // Duplicate images for seamless infinite scroll
  function duplicateSlides() {
    const slides = [...slider.children]; // Get all slides
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true); // Clone each image
      clone.classList.add("clone"); // Mark as clone
      slider.appendChild(clone); // Append clone
    });
  }

  duplicateSlides();

  function autoScroll() {
    slider.scrollLeft += 1;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, 100);
});

const googleSheetAPIUrl =
  "https://script.google.com/macros/s/AKfycbw0Ja3pxWDIEBeMvbamsD9MiCdA52JagNm8l_8tovQkatZuVNw6MtQyx_T4AxiNEyUjiQ/exec";

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let mobileInput = document.getElementById("phone").value;
  let nameInput = document.getElementById("name").value.trim();
  let nameError = document.getElementById("nameError");
  let errorSpan = document.getElementById("error");

  if (!/^[A-Za-z\s]+$/.test(nameInput)) {
    nameError.innerText =
      "Full name must contain only letters and spaces (no numbers).";
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  if (!/^\d{10}$/.test(mobileInput)) {
    errorSpan.innerText = "Mobile number must be exactly 10 digits.";
    return; // Stop submission
  } else {
    errorSpan.innerText = "";
  }

  let submitButton = document.querySelector(".sub-btn");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting..."; // Change button text

  let formData = new FormData(this);

  fetch(this.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      //   alert("Form submitted successfully!");
      window.location.href = "./thank.html"; // thank the page after submission
    })
    .catch((error) => {
      console.error("Error!", error);
      alert("There was an error submitting the form. Please try again.");
      submitButton.disabled = false;
      submitButton.textContent = "Submit"; // Reset button text if an error occurs
    });
});

document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();

  let mobileInput = document.getElementById("phone1").value;
  let errorSpan = document.getElementById("error2");
  let nameInput = document.getElementById("name1").value.trim();
  let nameError = document.getElementById("nameError1");

  if (!/^[A-Za-z\s]+$/.test(nameInput)) {
    nameError.innerText =
      "Full name must contain only letters and spaces (no numbers).";
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  if (!/^\d{10}$/.test(mobileInput)) {
    errorSpan.innerText = "Mobile number must be exactly 10 digits.";
    return; // Stop submission
  } else {
    errorSpan.innerText = "";
  }

  let submitButton = document.querySelector(".sub-btn2");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting..."; // Change button text

  let formData = new FormData(this);

  fetch(this.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      //   alert("Form submitted successfully!");
      // fbq("track", "Lead");
      window.location.href = "./thank.html";
      // thank the page after submission
    })
    .catch((error) => {
      console.error("Error!", error);
      alert("There was an error submitting the form. Please try again.");
      submitButton.disabled = false;
      submitButton.textContent = "Submit"; // Reset button text if an error occurs
    });
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
