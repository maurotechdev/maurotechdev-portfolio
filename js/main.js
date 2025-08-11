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

  // Botão de gerar CV em PDF
  const btnDownload = document.querySelector('.btn-download');
  if (btnDownload) {
    btnDownload.addEventListener('click', function (e) {
      e.preventDefault();
      gerarCVPDF();
    });
  }
});

// Função para gerar CV em PDF
function gerarCVPDF() {
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });

  // Paleta
  const azul = '#00aaff';
  const fundo = '#121212';
  const cinza = '#23272f';
  const branco = '#f0f0f0';
  const verde = '#00ffb3';
  const amarelo = '#ffe066';
  const rosa = '#ff4f81';

  // Fundo geral
  doc.setFillColor(fundo);
  doc.rect(0, 0, 595, 842, 'F');

  // Cabeçalho com avatar e nome
  doc.setFillColor(cinza);
  doc.roundedRect(30, 30, 535, 110, 18, 18, 'F');
  doc.setFontSize(28);
  doc.setTextColor(azul);
  doc.text('Mauro Diogo', 140, 70);
  doc.setFontSize(13);
  doc.setTextColor(branco);
  doc.text('Backend Developer | JavaScript • Node.js • Git • GitHub', 140, 95);
  doc.setFontSize(11);
  doc.text('Email: maurozage098@gmail.com', 140, 115);
  doc.text('LinkedIn: maurotechdev', 140, 132);
  // Avatar (círculo com ícone)
  doc.setFillColor(azul);
  doc.circle(75, 85, 38, 'F');
  doc.setFontSize(38);
  doc.setTextColor(fundo);
  doc.text('👨‍💻', 60, 100);

  // Perfil
  doc.setFontSize(16);
  doc.setTextColor(verde);
  doc.text('📝 Perfil', 40, 170);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('Sou desenvolvedor backend com experiência em Node.js, JavaScript, Git e mentoria de projetos finais.', 40, 190, { maxWidth: 515 });

  // Competências
  doc.setFontSize(16);
  doc.setTextColor(amarelo);
  doc.text('💡 Competências', 40, 225);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('• JavaScript, Node.js, Git, GitHub, Banco de Dados', 40, 245);
  doc.text('• Mentoria e integração de soluções', 40, 260);

  // Premiações
  doc.setFontSize(16);
  doc.setTextColor(rosa);
  doc.text('🏆 Premiações', 40, 295);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('• Melhor Projeto Acadêmico (2023)', 40, 315);
  doc.text('• Reconhecimento em Mentoria (2024)', 40, 330);
  doc.text('• Destaque em Inovação (2024)', 40, 345);
  doc.text('• Vencedor do Concurso de Leitura', 40, 360);

  // Projetos
  doc.setFontSize(16);
  doc.setTextColor(azul);
  doc.text('🚀 Projetos', 40, 395);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('• API de Gestão: Node.js, JWT, banco de dados', 40, 415);
  doc.text('• Plataforma de Mentoria: conexão entre mentores e alunos', 40, 430);

  // Formação
  doc.setFontSize(16);
  doc.setTextColor(verde);
  doc.text('🎓 Formação', 40, 465);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('• Colégio Árvore da Felicidade (concluído em julho/2025)', 40, 485);

  // Idiomas e Soft Skills
  doc.setFontSize(16);
  doc.setTextColor(amarelo);
  doc.text('🌎 Idiomas e Soft Skills', 40, 520);
  doc.setFontSize(11);
  doc.setTextColor(branco);
  doc.text('• Inglês intermediário', 40, 540);
  doc.text('• Perfil maleável, adaptável e colaborativo', 40, 555);
  doc.text('• Facilidade de aprendizado e comunicação', 40, 570);

  // Divisórias decorativas
  doc.setDrawColor(azul);
  doc.setLineWidth(2);
  doc.line(40, 210, 555, 210);
  doc.setDrawColor(verde);
  doc.line(40, 280, 555, 280);
  doc.setDrawColor(rosa);
  doc.line(40, 370, 555, 370);
  doc.setDrawColor(amarelo);
  doc.line(40, 505, 555, 505);

  // Salvar PDF
  doc.save('Mauro_Diogo_CV.pdf');
}

