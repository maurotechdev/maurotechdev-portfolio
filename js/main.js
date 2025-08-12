// TYPING EFFECT
function typeWriter(element, text, delay = 200) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

// REVEAL ON SCROLL
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// FAQ INTERACTION (toggle answer visibility)
function faqToggle() {
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      const p = faq.querySelector('p');
      const icon = faq.querySelector('h4 i');
      if (p.style.display === 'block') {
        p.style.display = 'none';
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
      } else {
        p.style.display = 'block';
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
      }
    });
  });
}

// SLIDER GALERIA
function gallerySlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
    const container = document.querySelector('.slides-container');
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });

  updateSlides();
}

// INICIALIZAÇÕES AO CARREGAR
document.addEventListener('DOMContentLoaded', () => {
  // Inicia typing no span.typing
  const typingSpan = document.querySelector('.typing');
  const text = 'Mauro Diogo'; // Texto a digitar
  typeWriter(typingSpan, text);

  // Inicia reveal on scroll
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // FAQ toggle
  faqToggle();

  // Slider da galeria
  gallerySlider();

});