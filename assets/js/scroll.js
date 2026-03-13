// Seleciona todas as sections do site (exceto o header e o footer)
const sections = document.querySelectorAll(
  'main section' // pega todas as sections dentro do main
);

// Cria o observador de interseção (IntersectionObserver)
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Quando a section entra na tela
    if (entry.isIntersecting) {
      entry.target.classList.add('section-show');
      observer.unobserve(entry.target); // para evitar reativar várias vezes
    }
  });
}, {
  threshold: 0.2 // quando 20% da section aparece, ativa a animação
});

// Observa cada section
sections.forEach(section => {
  section.classList.add('section'); // adiciona a classe base de animação
  observer.observe(section);
});
