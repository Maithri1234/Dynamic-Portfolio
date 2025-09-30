/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.addEventListener("scroll", headerShadow);
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) {
    navHeader.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav_menu_list a");

function scrollActive() {
  let scrollY = window.scrollY || window.pageYOffset;

  sections.forEach(current => {
    const rect = current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY - 80; // offset for navbar
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active-link");
        }
      });
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ==== Certificates Scroll Animation ==== */
const certificateCards = document.querySelectorAll(".certificate-card");

const certificateObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // stagger effect
      }
    });
  },
  { threshold: 0.2 }
);

certificateCards.forEach(card => {
  certificateObserver.observe(card);
});

/* -- CERTIFICATES -- */
sr.reveal(".certificate-card", {
  interval: 200,
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});

// ScrollReveal for Publications
sr.reveal("#publications", {
  origin: "bottom",
  distance: "50px",
  duration: 1500,
  reset: true
});

// ScrollReveal for Contact Section
sr.reveal("#contact", {
  origin: "bottom",
  distance: "50px",
  duration: 1500,
  reset: true
});
/* ----- AUTO CLOSE NAVBAR ON LINK CLICK (Mobile) ----- */
const navMenu = document.getElementById("myNavMenu");
const navMenuLinks = document.querySelectorAll(".nav_menu_list a");

navMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("responsive")) {
      navMenu.classList.remove("responsive");
    }
  });
});
/* ----- Animated Counters ----- */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

/* ----- Back to Top Button ----- */
const backToTopBtn = document.createElement('div');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerHTML = '⬆️';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ----- Smooth Scroll with easing ----- */
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if(targetEl){
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ----- Tilt Effect on Project Cards ----- */
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top;  // y position within the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});
