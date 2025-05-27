export default () => {
  setTimeout(() => {
    showDropdown();
    showGreeting();
  }, 0);

  return `
    <div class="cover">
        <div class="info-container">
            <h2>Praktikum ASD</h2>
            <p>Algoritma Struktur Data 24/25</p>
        </div>
        <div class="kode-container">
            <p class="label-kode">Kode Kelas</p>
            <h4 class="kode">
                jhms6ugf
                <img src="img/icon-copy.png" alt="Copy Icon" class="kode-icon"/>
            </h4>
        </div>
    </div>
    <div class="innerClass-menu">
        <ul class="innerClass-menu-list">
            <li><a href="forum.html" class="active">Forum</a></li>
            <li><a href="tugas-kelas.html">Tugas Kelas</a></li>
            <li><a href="orang.html">Orang</a></li>
        </ul>
    </div>
    <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda"></input>
    <p class="label-p">
        <img src="img/icon-tugas-abu.png" alt="Lastseen Icon" class="icon-label" />
        Penugasan Anda
    </p>
    <div class="innerClass-container-default">
        Belum ada topik yang di buat
    </div>
  `;
}