// script.js

// Navbar link active effect

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.style.color = "white";
    });

    link.style.color = "#fef08a";

  });

});

// Contact button message

const contactButton = document.querySelector(".contact button");

contactButton.addEventListener("click", () => {

  alert("Message Sent Successfully!");

});