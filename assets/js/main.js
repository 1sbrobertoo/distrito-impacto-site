// ============================================
// DISTRITO DE IMPACTO — JS GLOBAL
// ============================================

// ----- NAVBAR MOBILE -----
const menuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ----- MARCAR LINK ATIVO NA NAVBAR -----
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPath ||
      currentPath.includes(link.getAttribute('href').replace('/', ''))) {
    link.classList.add('active');
  }
});

// ----- CARREGAR ORGANIZAÇÕES (mapeamento) -----
async function carregarOrganizacoes() {
  const container = document.getElementById('org-cards');
  if (!container) return;
  try {
    const res = await fetch('/data/organizacoes.json');
    const data = await res.json();
    renderOrganizacoes(data.organizacoes);
    configurarFiltros(data.organizacoes);
  } catch (e) {
    container.innerHTML = '<p>Erro ao carregar dados.</p>';
  }
}

function renderOrganizacoes(lista) {
  const container = document.getElementById('org-cards');
  if (!lista.length) {
    container.innerHTML = '<p class="empty-msg">Nenhuma organização encontrada.</p>';
    return;
  }
  container.innerHTML = lista.map(org => `
    <div class="card" data-tipo="${org.tipo}" data-area="${org.area}">
      <span class="card-tag">${org.tipo}</span>
      <h3>${org.nome}</h3>
      <p>${org.descricao}</p>
      <div class="card-meta">
        <span>📍 ${org.cidade}</span>
        <span>🌱 ${org.area}</span>
        <span>📊 ${org.maturidade}</span>
      </div>
    </div>
  `).join('');
}

function configurarFiltros(lista) {
  const busca = document.getElementById('busca');
  const filtroTipo = document.getElementById('filtro-tipo');
  const filtroArea = document.getElementById('filtro-area');

  function aplicarFiltros() {
    const termo = busca ? busca.value.toLowerCase() : '';
    const tipo = filtroTipo ? filtroTipo.value : '';
    const area = filtroArea ? filtroArea.value : '';
    const filtrado = lista.filter(org => {
      const matchBusca = org.nome.toLowerCase().includes(termo) ||
                         org.descricao.toLowerCase().includes(termo);
      const matchTipo = !tipo || org.tipo === tipo;
      const matchArea = !area || org.area === area;
      return matchBusca && matchTipo && matchArea;
    });
    renderOrganizacoes(filtrado);
  }

  if (busca) busca.addEventListener('input', aplicarFiltros);
  if (filtroTipo) filtroTipo.addEventListener('change', aplicarFiltros);
  if (filtroArea) filtroArea.addEventListener('change', aplicarFiltros);
}

// ----- CARREGAR EVENTOS -----
async function carregarEventos() {
  const container = document.getElementById('eventos-lista');
  if (!container) return;
  try {
    const res = await fetch('/data/eventos.json');
    const data = await res.json();
    renderEventos(data.eventos);
  } catch (e) {
    container.innerHTML = '<p>Erro ao carregar eventos.</p>';
  }
}

function renderEventos(lista) {
  const container = document.getElementById('eventos-lista');
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  container.innerHTML = lista.map(ev => {
    const data = new Date(ev.data);
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    return `
      <div class="evento-card">
        <div class="evento-data">
          <div class="evento-dia">${dia}</div>
          <div class="evento-mes">${mes}</div>
        </div>
        <div class="evento-info">
          <h3>${ev.titulo}</h3>
          <p>${ev.descricao}</p>
          <span class="evento-tipo">${ev.tipo}</span>
          <div class="card-meta" style="margin-top:0.6rem">
            <span>📍 ${ev.local}</span>
            <span>⏰ ${ev.horario}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ----- INIT -----
document.addEventListener('DOMContentLoaded', () => {
  carregarOrganizacoes();
  carregarEventos();
});
