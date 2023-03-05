const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  const lastName = document.getElementById("contact-lastname").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;

  alert(`Contact Data: 
    Name: ${name}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
  `);
});
