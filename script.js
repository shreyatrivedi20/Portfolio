// ============================================
//  SHREYA TRIVEDI — PORTFOLIO SCRIPTS
// ============================================

// SCROLL REVEAL — watches all .reveal / .reveal-left / .reveal-right elements
// and adds .visible when they enter the viewport

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

document
  .querySelectorAll('.reveal, .reveal-left, .reveal-right')
  .forEach((el) => revealObserver.observe(el));


// MOBILE NAV TOGGLE

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}


// ACTIVE NAV LINK — highlights the current section in the nav
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.style.color =
            link.getAttribute('href') === `#${id}`
              ? 'var(--text)'
              : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((sec) => sectionObserver.observe(sec));


// CONTACT FORM — basic submit feedback
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.opacity = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});