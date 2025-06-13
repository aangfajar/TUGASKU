import Beranda from './views/beranda.js';
import Mengajar from './views/mengajar.js';
import Terdaftar from './views/terdaftar.js';
import Tim from './views/tim.js';
import Tugas from './views/tugas.js';
import InClassMengajar from './views/inClassMengajar.js';
import inClassTerdaftar from './views/inClassTerdaftar.js';
import createClass from './views/createClass.js';
import joinClass from './views/joinClass.js';

const routes = {
  '/beranda': Beranda,
  '/mengajar': Mengajar,
  '/terdaftar': Terdaftar,
  '/tim': Tim,
  '/tugas': Tugas,
  '/inClassMengajar':InClassMengajar,
  '/inClassTerdaftar':inClassTerdaftar,
  '/createClass':createClass,
  '/joinClass':joinClass,
};

const updateMenuLabel = (path) => {
  const menuLabel = document.getElementById('menu-label');
  const labels = {
    '/beranda': 'Beranda',
    '/mengajar': 'Mengajar',
    '/terdaftar': 'Terdaftar',
    '/tim': 'Tim',
    '/tugas': 'Tugas',
    '/inClassMengajar': 'Mengajar',
    '/inClassTerdaftar': 'Terdaftar',
    '/createClass': 'Mengajar',
    '/joinClass': 'Terdaftar',
  };
  menuLabel.textContent = labels[path] || 'Halaman Tidak Ditemukan';
};

const router = async () => {
  const path = location.hash.slice(1) || '/beranda';
  console.log('Current hash:', location.hash);
  console.log('Current path:', path);
  
  const view = routes[path] || (() => '<h1>404 - Halaman tidak ditemukan</h1>');
  const html = typeof view === 'function' ? await view() : view;

  console.log('View function:', view);
  document.getElementById('app').innerHTML = html;
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


// const router = async () => {
//   const path = location.hash.slice(1) || '/beranda';
//   console.log('Current hash:', location.hash);
//   console.log('Current path:', path);
//   const view = routes[path] || (() => '<h1>404 - Halaman tidak ditemukan</h1>');
//   console.log('View function:', view);
//   document.getElementById('app').innerHTML = view();
//   updateMenuLabel(path);
// };
