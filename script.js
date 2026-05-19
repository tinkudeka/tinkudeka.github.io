// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.section, .project-card, .edu-card, .info-card, .skill-category'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ===== CONTACT FORM — Web3Forms =====
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');
const errorMsg   = document.getElementById('errorMsg');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Button loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled    = true;
  successMsg.style.display = 'none';
  errorMsg.style.display   = 'none';

  // Build form data
  const formData = new FormData(form);
  const object   = Object.fromEntries(formData);
  const json     = JSON.stringify(object);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       'application/json'
      },
      body: json
    });

    const result = await response.json();

    if (result.success) {
      // Success
      successMsg.style.display = 'block';
      form.reset();
    } else {
      // API returned error
      errorMsg.style.display = 'block';
    }

  } catch (error) {
    // Network error
    errorMsg.style.display = 'block';
  }

  // Reset button
  submitBtn.textContent = 'Send Message';
  submitBtn.disabled    = false;
});