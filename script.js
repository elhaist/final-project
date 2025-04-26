
// Hamburger Menu 
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
  
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

  // Book Tap Effect on Mobile
document.addEventListener("DOMContentLoaded", function() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
      book.addEventListener('click', function() {
        // Toggle the 'active' class to simulate a tap effect
        this.classList.toggle('active');
      });
    });
  });

