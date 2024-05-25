const move = document.querySelector(`.yes`);
move.classList.add(`slidee`);

move.addEventListener(`click`, function () {
  move.style.position = `relative`;
  const x = Math.round(Math.random() * 150 + 1);
  const y = Math.round(Math.random() * 150 + 1);
  move.style.top = y + "px";
  move.style.right = x + "px";
});

const no = document.querySelector(".no");
const container = document.querySelector(".container");

no.addEventListener("click", function () {
  container.removeChild(no);
  container.removeChild(move);
  document.body.style.backgroundColor = `red`;

  // Buat elemen video baru
  const video = document.createElement("video");
  // Tentukan sumber video
  video.setAttribute("src", "skullmeme.mp4"); // Ganti dengan path video Anda
  // Tambahkan atribut autoplay untuk memulai video secara otomatis
  video.setAttribute("autoplay", "");
  // Tambahkan atribut muted untuk menonaktifkan suara
  video.setAttribute("muted", "");
  video.volume = 0;
  // Tambahkan atribut loop untuk membuat video berulang
  video.setAttribute("loop", "");
  // Tambahkan atribut class jika diperlukan
  video.classList.add("dynamic-video"); // Ganti 'dynamic-video' dengan nama kelas yang Anda inginkan

  // Set opasitas video menjadi 0
  video.style.opacity = 0;

  // Tambahkan video ke dalam container
  container.appendChild(video);

  // Delay untuk memastikan bahwa browser telah memperbarui tata letak sebelum mengubah opasitas
  setTimeout(function () {
    // Set opasitas video menjadi 1 dengan transisi
    video.style.opacity = 1;
  }, 100); // Ubah angka delay sesuai kebutuhan Anda
});
