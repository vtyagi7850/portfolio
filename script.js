// Dark Mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Typing Effect
const typingEl = document.querySelector(".typing");
const phrases = ["Frontend Developer", "JavaScript Enthusiast", "UI/UX Explorer"];
let i = 0, j = 0;

function type() {
  if (j < phrases[i].length) {
    typingEl.textContent += phrases[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingEl.textContent = "";
      j = 0;
      i = (i + 1) % phrases.length;
      type();
    }, 2000);
  }
}
type();

// ScrollReveal Manual
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('reveal-visible');
    }
  }
});

// Project Filter
function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.style.display = (type === 'all' || card.classList.contains(type)) ? 'block' : 'none';
  });
}

// EmailJS
(function () {
  emailjs.init("UCi0X4WDP_ipw-VSQ");
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_id', 'template_id', this)
    .then(() => {
      alert("Message sent!");
      this.reset();
    }, () => {
      alert("Error sending message.");
    });
});
