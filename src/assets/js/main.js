document.addEventListener('DOMContentLoaded', function () {
  // tambahkan padding top untuk menampilkan konten di belakang navbar
  navbar_height = document.querySelector('.navbar').offsetHeight
  document.body.style.paddingTop = navbar_height + 'px'
})

// AOS init
AOS.init({
  once: true,
})

const dropdownContainers = document.querySelectorAll('.dropdown-container')

dropdownContainers.forEach((dropdown, idx) => {
  dropdown.addEventListener('click', () => {
    hideAllDropdown()
    dropdown.classList.add('active')
  })
  
  dropdown.addEventListener('blur', () => {
    hideAllDropdown()
  })
})

function hideAllDropdown() {
  dropdownContainers.forEach((drop) => {
    drop.classList.remove('active')
  })
}

const MobileMenuBtn = document.querySelector('.mobile-menu-btn')
const MobileMenu = document.querySelector('.mobile-menu')
const closeMenuBtn = document.querySelector('.close-menu-btn')

MobileMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.add('active')
})
closeMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.remove('active')
})

const dropdownContainersMobile = document.querySelectorAll('.dropdown-container-mobile')

dropdownContainersMobile.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active')
  })
})