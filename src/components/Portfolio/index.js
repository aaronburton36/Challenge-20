const navLinks = document.querySelectorAll('.nav-link');

// Sets active link styling when clicked 
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(otherLink => otherLink.classList.remove('active'));
    link.classList.add('active');
  });
});

// Hides the navigation menu when a link is clicked 
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('.navigation-menu');
    navMenu.classList.remove('show');
  });
});

// Displays a confirmation message when form is submitted successfully 
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Add code here to send form data to server and display response
  alert('Form submitted successfully!');
});
