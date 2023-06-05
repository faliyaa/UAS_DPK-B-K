const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

function pindahKesiswa() {
  window.location.href = 'siswa.html';
}

function pindahKeguru() {
  window.location.href = 'guru.html';
}

function pindahKenonaka() {
  window.location.href = 'non-akademik.html';
}

function pindahakademik() {
  window.location.href = 'akademik.html';
}
