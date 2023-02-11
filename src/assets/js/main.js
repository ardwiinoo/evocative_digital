document.addEventListener('DOMContentLoaded', function () {
  // tambahkan padding top untuk menampilkan konten di belakang navbar
  navbar_height = document.querySelector('.navbar').offsetHeight
  document.body.style.paddingTop = navbar_height + 'px'
})

// AOS init
AOS.init({
  once: true,
})

// const accordions = document.querySelectorAll('.accordion-head')

// accordions.forEach(accordion => {
//   accordion.addEventListener('click', () => {
//     accordion.classList.toggle('active')
//   })
// })

const dropdownContainers = document.querySelectorAll('.dropdown-container')

dropdownContainers.forEach((dropdown, idx) => {
  dropdown.addEventListener('click', () => {
    hideAllDropdown()
    dropdown.classList.add('active')
  })
  
})

function hideAllDropdown() {
  dropdownContainers.forEach((drop) => {
    drop.classList.remove('active')
  })
}
