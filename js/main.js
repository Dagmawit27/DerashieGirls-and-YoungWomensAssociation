import { initRouter } from './router.js'
document.addEventListener('DOMContentLoaded', () => {
  initRouter()

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })
})


let currentPage = 'home'

export async function navigate(page, storyId = null) {
  currentPage = page

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${page}`) {
      link.classList.add('active')
    }
  })
}

document.querySelectorAll('.nav-link, .logo').forEach(link => { 
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')
    const page = href.replace('#', '') || 'home'

    window.location.hash = href
    navigate(page)

    // 🔥 SET ACTIVE NAV ITEM
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
    if (link.classList.contains('nav-link')) {
      link.classList.add('active')
    }
  })
})

const mobileToggle = document.querySelector('.mobile-menu-toggle')
const navMenu = document.querySelector('.nav-menu')

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active')
  }
})
