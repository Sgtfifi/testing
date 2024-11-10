function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   emailjs.init("YOUR_USER_ID"); // Replace with your actual User ID

//   document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Service ID, Template ID, and form values
//     emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//       .then(
//         function (response) {
//           alert("Email sent successfully!");
//           console.log("Success!", response.status, response.text);
//         },
//         function (error) {
//           alert("Failed to send email. Please try again later.");
//           console.log("Failed...", error);
//         }
//       );
//   });
// });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("active");
}

