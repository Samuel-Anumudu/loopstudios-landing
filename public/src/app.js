const menuClose = document.querySelector('.close')
const menuOpen = document.querySelector('.open')
const mainNav = document.querySelector('.nav')
const header = document.querySelector('.header')
const heroText = document.querySelector('.hero-text')
const htmlElement = document.querySelector('html')
const mainSection = document.querySelector('.main')
const footer = document.querySelector('.footer')
const navBar = document.querySelector('.topnav')

// Open Hamburger
function openNavBar() {
  menuClose.style.display = 'none'
  menuOpen.style.display = 'block'
  mainNav.style.display = 'block'
  document.body.style.backgroundColor = '#000'
  header.style.background = 'rgba(0, 0, 0, 0)'
  heroText.style.display = 'none'
  mainSection.style.display = 'none'
  footer.style.display = 'none'
}

// Close Hamburger
function closeNavBar() {
  menuOpen.style.display = 'block'
  menuOpen.style.display = 'none'
  menuClose.style.display = 'block'
  mainNav.style.display = 'none'
  document.body.style.backgroundColor = '#fff'
  header.style.background = ''
  heroText.style.display = 'block'
  mainSection.style.display = 'block'
  footer.style.display = 'block'
}

menuClose.addEventListener('click', openNavBar)
menuOpen.addEventListener('click', closeNavBar)

// Get current year
const currentYear = document.querySelector('.current-year')
const date = new Date()
currentYear.innerHTML = date.getFullYear()
