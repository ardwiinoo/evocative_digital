document.addEventListener("DOMContentLoaded", function () {
  // tambahkan padding top untuk menampilkan konten di belakang navbar
  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";
});

// AOS init
AOS.init({
  once: true,
});
