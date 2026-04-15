// ============================================
// DISTRITO DE IMPACTO - JS GLOBAL REVISADO
// ============================================

// ------ TEMA (DARK/LIGHT) ------
const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');

// Inicializa tema baseado no localStorage ou preferência do sistema
let theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

root.setAttribute('data-theme', theme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}

// ------ NAVBAR MOBILE ------
const menuBtn = document.querySelector('.nav-menu-btn') || document.querySelector('.toggle-menu'); // Suporte a diferentes nomes
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', expanded);
  });
}

// ------ MARCAR LINK ATIVO NA NAVBAR ------
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath !== '/' && href !== '/' && currentPath.includes(href.replace('/distrito-impacto-site', '')))) {
    link.classList.add('active');
  }
});

// ------ UTILITÁRIOS GLOBAIS ------
console.log('Distrito de Impacto - Plataforma V1 carregada.');
