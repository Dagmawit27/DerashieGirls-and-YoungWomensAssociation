import { HomePage, AboutPage, ProgramsPage, StoriesPage, StoryDetailPage, GalleryPage, VolunteerPage, ContactPage } from './pages.js';



const routes = {
  'home': HomePage,
  'about': AboutPage,
  'programs': ProgramsPage,
  'stories': StoriesPage,
  'story': StoryDetailPage,
  'gallery': GalleryPage,
  'volunteer': VolunteerPage,
  'contact': ContactPage
}


export function initRouter() {
  // Listen to hash changes
  window.addEventListener('hashchange', () => loadPage());

  // Initial load
  loadPage();
}

function loadPage() {
  const hash = window.location.hash.replace('#', '');
  const page = hash || 'home';

  updateActiveNav(page);

  switch(page) {
    case 'home':
      HomePage();
      break;
    case 'about':
      AboutPage();
      break;
    case 'programs':
      ProgramsPage();
      break;
    case 'stories':
      StoriesPage();
      break;
    case 'gallery':
      GalleryPage();
      break;
    case 'volunteer':
      VolunteerPage();
      break;
    case 'contact':
      ContactPage();
      break;
    default:
      // Detect detail page: #stories/1
      if (page.startsWith('stories/')) {
        const id = page.split('/')[1];
        StoryDetailPage(id);
      } else {
        HomePage();
      }
      break;
  }
}


function updateActiveNav(page) {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.classList.remove("active");

    const target = link.getAttribute("href").replace("#", "");

    // Exact match (home, about, programs, stories)
    if (page === target) {
      link.classList.add("active");
    }

    // Match nested routes (#stories/123 → should highlight Stories)
    if (page.startsWith("stories") && target === "stories") {
      link.classList.add("active");
    }
  });
}

