const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

const whatsappMessage = encodeURIComponent(
  "Hola, ¿qué tal?\n" +
  "Estuve viendo tu portafolio y me interesa el servicio de diseño web.\n" +
  "Quisiera información para crear mi página web."
);

const whatsappLink = `https://wa.me/51966983121?text=${whatsappMessage}`;

  
  const contactInfo = [
  {
    icon: 'ri-mail-line',
    title: 'Email',
    value: 'neriobeker05@gmail.com',
    link: 'mailto:neriobeker05@gmail.com'
  },
  {
    icon: 'ri-whatsapp-line',
    title: 'WhatsApp',
    value: '+51 966983121',
    link: whatsappLink
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Ubicación',
    value: 'Huánuco, Perú',
    link: 'https://maps.app.goo.gl/bhkGfmHHQYMNiNgL6',
  }
];


const cardsContainer = document.querySelector('.contact-cards');
const socialContainer = document.querySelector('.social-links');

contactInfo.forEach(info => {
  cardsContainer.innerHTML += `
    <a href="${info.link}" class="contact-card">
      <div class="contact-icon">
        <i class="${info.icon}"></i>
      </div>
      <div class="contact-text">
        <h4>${info.title}</h4>
        <p>${info.value}</p>
      </div>
    </a>
  `;
});

socialLinks.forEach(social => {
  socialContainer.innerHTML += `
    <a href="${social.link}">
      <i class="${social.icon}"></i>
    </a>
  `;
});



function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    scrollToSection(button.dataset.scroll);
  });
});


