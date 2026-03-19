/* ============================
   CONTACT FORM — SEND MAIL
   ============================ */
function sendMail() {
  const name    = document.getElementById('senderName').value.trim();
  const email   = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('senderMsg').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body    = encodeURIComponent(
    'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message
  );

  window.location.href =
    'mailto:shofiulazam5767@gmail.com?subject=' + subject + '&body=' + body;

  const feedback = document.getElementById('formFeedback');
  feedback.style.display = 'block';
  setTimeout(() => { feedback.style.display = 'none'; }, 4000);
}

/* ============================
   CUSTOM CURSOR
   ============================ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

const hoverTargets = document.querySelectorAll(
  'a, button, .skill-tag, .stat, .project-card, .edu-item, .contact-link-item'
);

hoverTargets.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '18px';
    cursor.style.height = '18px';
    ring.style.width    = '52px';
    ring.style.height   = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '10px';
    cursor.style.height = '10px';
    ring.style.width    = '36px';
    ring.style.height   = '36px';
  });
});

/* ============================
   NAVBAR ON SCROLL
   ============================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ============================
   SCROLL REVEAL
   ============================ */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => observer.observe(el));
