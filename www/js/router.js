import Beranda from './views/beranda.js';
import Mengajar from './views/mengajar.js';
import terdaftar from './views/terdaftar.js';
import Tim from './views/tim.js';
import Tugas from './views/tugas.js';

const routes = {
  '/beranda': Beranda,
  '/mengajar': Mengajar,
  '/terdaftar': terdaftar,
  '/tim': Tim,
  '/tugas': Tugas,
};

const updateMenuLabel = (path) => {
  const menuLabel = document.getElementById('menu-label');
  const labels = {
    '/beranda': 'Beranda',
    '/mengajar': 'Mengajar',
    '/terdaftar': 'Terdaftar',
    '/tim': 'Tim',
    '/tugas': 'Tugas',
  };
  menuLabel.textContent = labels[path] || 'Halaman Tidak Ditemukan';
};

const router = async () => {
  const path = location.hash.slice(1).toLowerCase() || '/beranda';
  console.log('Current hash:', location.hash);
  console.log('Current path:', path);
  const view = routes[path] || (() => '<h1>404 - Halaman tidak ditemukan</h1>');
  console.log('View function:', view);
  document.getElementById('app').innerHTML = view();
  updateMenuLabel(path);
};

const updateHashFromNavigation = () => {
  const menuItems = document.querySelectorAll('[data-page]');
  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const page = item.getAttribute('data-page');
      location.hash = `#/${page}`;
    });
  });
};

updateHashFromNavigation();

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
