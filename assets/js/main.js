document.addEventListener("DOMContentLoaded", function () {
  // tambahkan padding top untuk menampilkan konten di belakang navbar
  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";
});

// AOS init
AOS.init({
  once: true,
});


const accordions = document.querySelectorAll('.accordion-head')
const accordionsBody = document.querySelectorAll('.accordion-body')

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active')
  })
})