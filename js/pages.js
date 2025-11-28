

export function HomePage() {

  const app = document.getElementById('app');
  app.innerHTML = renderHomeContent();
} 
function renderHomeContent() {  
return `
    <div class="hero" style="padding: 130px 60px; padding-top: 200px">
      <div class="container">
        <div class="hero-content">
          <h1>Derashie Girl's and Young Women's Association</h1>
          <p>Building brighter futures through education, protection, and opportunity. In partnership with Plan International.</p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <a href="#volunteer" class="btn btn-primary">Become a Volunteer</a>
            <a href="#programs" class="btn btn-secondary">Our Programs</a>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Our Mission</h2>
          <p>We are committed to creating lasting change in the lives of children and women through comprehensive support programs.</p>
        </div>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">📚</div>
            <h3>Education for All</h3>
            <p>Ensuring every child, especially girls, has access to quality education and the opportunity to reach their full potential.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">🛡️</div>
            <h3>Child Protection</h3>
            <p>Creating safe environments where children can grow up free from violence, exploitation, and abuse.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">💪</div>
            <h3>Women's Empowerment</h3>
            <p>Supporting women through skills training, economic opportunities, and leadership development programs.</p>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Lives Impacted</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">25+</div>
            <div class="stat-label">Communities Served</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Active Programs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Volunteers</div>
          </div>
        </div>
      </div>
    </section>
  `
}


export function AboutPage() {

  const app = document.getElementById('app');
  app.innerHTML = renderAboutContent();
}

function renderAboutContent() {  
  return `
    <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>About Derashie Girl's and Young Women's Association</h1>
          <p>Partnering with Plan International to create lasting change</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Our Story</h2>
          <p>Derashie Girl's and Young Women's Association is a non-profit organization dedicated to improving the lives of children and women in underserved communities. Working in partnership with Plan International, we implement comprehensive programs that address education, protection, health, and economic empowerment.</p>
        </div>

        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower children and women to break the cycle of poverty and build sustainable futures through education, protection, and opportunity.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>A world where every child and woman has the opportunity to reach their full potential and live a life of dignity and purpose.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">❤️</div>
            <h3>Our Values</h3>
            <p>Respect, integrity, empowerment, collaboration, and a commitment to creating lasting positive change in communities.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-light);">
      <div class="container">
        <div class="section-title">
          <h2>Our Team</h2>
          <p>Dedicated professionals working together to create impact</p>
        </div>
        <div class="team-grid">
          <div class="team-member">
            <div class="team-photo">SA</div>
            <div class="team-name">Sarah Anderson</div>
            <div class="team-role">Executive Director</div>
          </div>
          <div class="team-member">
            <div class="team-photo">MJ</div>
            <div class="team-name">Michael Johnson</div>
            <div class="team-role">Program Director</div>
          </div>
          <div class="team-member">
            <div class="team-photo">EC</div>
            <div class="team-name">Emily Chen</div>
            <div class="team-role">Education Coordinator</div>
          </div>
          <div class="team-member">
            <div class="team-photo">DW</div>
            <div class="team-name">David Williams</div>
            <div class="team-role">Community Outreach Manager</div>
          </div>
        </div>
      </div>
    </section>
  `
}




export function ProgramsPage() {

  const app = document.getElementById('app');
  app.innerHTML = renderProgramContent();

  initProgramFilters();
}

function renderProgramContent() {
  // Local data instead of Supabase
  const programs = [
    {
      title: "Girls Education Initiative",
      description:
        "Empowering girls through quality education and mentorship programs. We provide scholarships, school supplies, and educational support to ensure every girl has access to learning opportunities.",
      category: "Education",
      image_url:
        "https://images.pexels.com/photos/8500285/pexels-photo-8500285.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Women's Empowerment Program",
      description:
        "Supporting women through skills training, microfinance, and leadership development. Our program helps women gain financial independence and confidence.",
      category: "Women",
      image_url:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Child Protection Services",
      description:
        "Creating safe environments for children through community education and protection systems. We work to prevent violence and exploitation.",
      category: "Children",
      image_url:
        "https://images.pexels.com/photos/8363099/pexels-photo-8363099.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Healthcare Access Program",
      description:
        "Providing essential healthcare services and health education to underserved communities. Focus on maternal and child health.",
      category: "Health",
      image_url:
        "https://images.pexels.com/photos/8460165/pexels-photo-8460165.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Youth Leadership Training",
      description:
        "Developing the next generation of leaders through training, workshops, and mentorship opportunities for young people.",
      category: "Youth",
      image_url:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Nutrition and Food Security",
      description:
        "Ensuring children and families have access to nutritious food and education about healthy eating habits.",
      category: "Health",
      image_url:
        "https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Generate categories list
  const categories = ["All", ...new Set(programs.map((p) => p.category))];

  // Return HTML (same structure as your Supabase version)
  return `
    <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>Our Programs</h1>
          <p>Comprehensive initiatives supporting children and women</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="programs-filters">
          ${categories
            .map(
              (cat, i) => `
            <button class="filter-btn ${i === 0 ? "active" : ""}" data-category="${cat}">
              ${cat}
            </button>
          `
            )
            .join("")}
        </div>

        <div class="programs-grid">
          ${programs
            .map(
              (program) => `
            <div class="program-card" data-category="${program.category}">
              <img src="${program.image_url}" alt="${program.title}" class="program-image">
              <div class="program-content">
                <span class="program-category">${program.category}</span>
                <h3>${program.title}</h3>
                <p>${program.description}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}


function initProgramFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".program-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        card.style.display =
          category === "All" || cardCategory === category
            ? "block"
            : "none";
      });
    });
  });
}

export function StoriesPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderStoriesContent();

  initStoryClicks();
}
function renderStoriesContent() {

  return ` <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>Success Stories & News</h1>
          <p>Inspiring stories of transformation and community impact</p>
        </div>
      </div>
    </div>

    <section class="section" id="stories">
      <div class="container">
        <div class="stories-grid">
          ${stories
            .map(
              story => `
            <div class="story-card" data-story-id="${story.id}">
              <img src="${story.image_url}" alt="${story.title}" class="story-image">
              <div class="story-content">
                <div class="story-meta">
                  <span class="story-type ${story.category}">
                    ${story.category === "success_story" ? "Success Story" : "News"}
                  </span>
                  <span class="story-date">${formatDate(story.published_date)}</span>
                </div>
                <h3>${story.title}</h3>
                <p class="story-excerpt">${story.excerpt}</p>
                <span class="read-more">Read more →</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

function initStoryClicks() {
  document.querySelectorAll(".story-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-story-id");
      window.location.hash = `stories/${id}`;
    });
  });
}

export function StoryDetailPage(storyId) {
  const story = stories.find(s => s.id === storyId);

  const app = document.getElementById('app');

  if (!story) {
    app.innerHTML = `<div class="container"><p>Story not found</p></div>`;
    return;
  }

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="story-detail">
          <a href="#stories" class="back-btn">← Back to Stories</a>
          <img src="${story.image_url}" alt="${story.title}" class="story-detail-image">

          <div class="story-detail-content">
            <div class="story-meta">
              <span class="story-type ${story.category}">
                ${story.category === "success_story" ? "Success Story" : "News"}
              </span>
              <span class="story-date">${formatDate(story.published_date)}</span>
            </div>
            <h1>${story.title}</h1>

            ${story.content
              .split('\n')
              .map(p => p.trim() ? `<p>${p}</p>` : "")
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}


  const stories = [
  {
    id: "1",
    title: "Maria's Journey to Becoming a Teacher",
    excerpt:
      "From scholarship recipient to inspiring teacher, Maria's story shows the transformative power of education support.",
    content: `Maria grew up in a small village with limited access to education. Through our Girls Education Initiative, she received a scholarship and mentorship support. Today, at age 24, Maria has completed her university education and returned to her village as a teacher, inspiring the next generation of girls. "This organization believed in me when I didn't believe in myself," Maria shares. "Now I want to give back and help other girls achieve their dreams." Her story represents the transformative power of education and the ripple effect of supporting one girl. Maria now teaches 45 students and runs weekend literacy programs for women in her community.`,
    category: "success_story",
    image_url:
      "https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800",
    published_date: "2025-01-20",
  },
  {
    id: "2",
    title: "Women's Co-op Transforms Local Economy",
    excerpt:
      "Thirty women create thriving agricultural business through micro-finance and skills training support.",
    content: `A group of 30 women in the northern region have formed a successful agricultural cooperative with support from our Women's Empowerment Program. Starting with micro-loans and business training, the co-op now generates sustainable income for all members and employs 15 additional workers. The women have gained financial independence, increased their families' food security, and become role models in their community.`,
    category: "success_story",
    image_url:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    published_date: "2025-01-13",
  },
  {
    id: "3",
    title: "New Partnership with Plan International Announced",
    excerpt:
      "Expanded collaboration will impact 10,000 children and families through education and empowerment programs.",
    content: `We are excited to announce an expanded partnership with Plan International to reach 10,000 more children and families over the next three years. This collaboration will focus on education, child protection, and economic empowerment initiatives.`,
    category: "news",
    image_url:
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
    published_date: "2025-01-22",
  },
  {
    id: "4",
    title: "Annual Volunteer Appreciation Event",
    excerpt:
      "Celebrating dedicated volunteers who contribute thousands of hours to support children and women.",
    content: `Last Saturday, we celebrated our incredible volunteers who contribute over 5,000 hours annually to support our mission. The event featured success stories, community performances, and recognition awards.`,
    category: "news",
    image_url:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
    published_date: "2025-01-16",
  },
];


const galleryImages = [
  { url: './image/photo_1.jpg', alt: 'Women in a training session' },
  { url: './image/photo_3.jpg', alt: 'Girl studying outside' },
  { url: './image/photo_4.jpg', alt: 'Children smiling in school' },
  { url: './image/photo_8.jpg', alt: 'Community workshop' },
  { url: './image/photo_9.jpg', alt: 'Adult and child bonding' },
  { url: './image/photo_12.jpg', alt: 'Community workshop' },
  { url: './image/photo_2.jpg', alt: 'Community workshop' },
];

export function GalleryPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderGalleryContent();
}

function renderGalleryContent() {
  return `
    <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>Our Photo Gallery</h1>
          <p>Moments of impact, community, and empowerment.</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="gallery-grid">
          ${galleryImages
            .map(
              (image) => `
            <div class="gallery-item">
              <img src="${image.url}" alt="${image.alt}">
              <div class="gallery-overlay">${image.alt}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}



export function VolunteerPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderVolunteerContent();
} 

function renderVolunteerContent() {
  return `
    <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>Become a Volunteer</h1>
          <p>Join our community of changemakers</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="form-section">
          <div class="section-title">
            <h2>Volunteer Signup</h2>
            <p>Fill out the form below to express your interest in volunteering with us. We'll get in touch with you soon!</p>
          </div>

          <div id="volunteer-message"></div>

          <form id="volunteer-form">
            <div class="form-group">
              <label for="full_name">Full Name *</label>
              <input type="text" id="full_name" name="full_name" required>
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>

            <div class="form-group">
              <label for="interest_area">Area of Interest</label>
              <select id="interest_area" name="interest_area">
                <option value="">Select an area</option>
                <option value="Education">Education</option>
                <option value="Children">Child Protection</option>
                <option value="Women">Women's Empowerment</option>
                <option value="Health">Healthcare</option>
                <option value="Admin">Administrative Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Tell us about yourself</label>
              <textarea id="message" name="message" placeholder="Share your interests, skills, and why you want to volunteer..."></textarea>
            </div>

            <button type="submit" class="btn btn-cta" style="width: 100%;">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  `
}

export function ContactPage() {
  const app = document.getElementById('app');
  app.innerHTML = renderContactContent();
} 
function renderContactContent() {
  return `
    <div class="hero" style="padding: 150px 60px;">
      <div class="container">
        <div class="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="form-section">
          <div class="section-title">
            <h2>Send us a Message</h2>
            <p>We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.</p>
          </div>

          <div id="contact-message"></div>

          <form id="contact-form">
            <div class="form-group">
              <label for="contact_name">Name *</label>
              <input type="text" id="contact_name" name="name" required>
            </div>

            <div class="form-group">
              <label for="contact_email">Email *</label>
              <input type="email" id="contact_email" name="email" required>
            </div>

            <div class="form-group">
              <label for="contact_phone">Phone Number</label>
              <input type="tel" id="contact_phone" name="phone">
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required>
            </div>

            <div class="form-group">
              <label for="contact_message">Message *</label>
              <textarea id="contact_message" name="message" required placeholder="Your message..."></textarea>
            </div>

            <button type="submit" class="btn btn-cta" style="width: 100%;">Send Message</button>
          </form>

          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <strong>Address:</strong><br>
                  123 Hope Street, Community Center<br>
                  City, State 12345
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <strong>Phone:</strong><br>
                  +1 (555) 123-4567
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <strong>Email:</strong><br>
                  info@hopefoundation.org
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🕐</div>
                <div>
                  <strong>Office Hours:</strong><br>
                  Monday - Friday: 9:00 AM - 5:00 PM<br>
                  Saturday: 10:00 AM - 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

