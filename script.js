// Project data
const projectData = {
  shipping: {
    icon: "🚢",
    title: "Shipping Transport Management System",
    category: "Logistics Tracking Solution",
    description:
      "A comprehensive system designed to track shipments and manage transport logistics efficiently. The system provides real-time tracking capabilities, route optimization, and comprehensive reporting features for logistics companies.",
    technologies: ["Visual Studio", "SQL", "C#", "ASP.NET"],
    features: [
      "Real-time shipment tracking",
      "Route optimization algorithms",
      "Comprehensive reporting dashboard",
      "Multi-user access control",
      "Integration with GPS systems",
      "Automated notification system",
    ],
  },
  photographer: {
    icon: "📸",
    title: "Photographer Management System",
    category: "Booking & Payment Platform",
    description:
      "A complete booking and payment system designed specifically for photographers. The platform enables photographers to manage their schedules, handle client bookings, process payments, and manage their portfolio.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Online booking system",
      "Payment gateway integration",
      "Portfolio management",
      "Client communication tools",
      "Schedule management",
      "Invoice generation",
    ],
  },
  badminton: {
    icon: "🏸",
    title: "Badminton E-commerce Website",
    category: "Sports Equipment Store",
    description:
      "An interactive e-commerce platform specifically designed for badminton enthusiasts. Features a comprehensive product catalog, shopping cart functionality, secure checkout process, and user account management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    features: [
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Secure payment processing",
      "User account management",
      "Order tracking system",
      "Product reviews and ratings",
    ],
  },
  fashion: {
    icon: "👗",
    title: "Fashion E-Commerce Website",
    category: "Clothing & Accessories Marketplace",
    description:
      "A full-stack e-commerce platform for fashion retail. Users can browse clothing collections, create accounts, manage wishlists, and complete purchases through a secure payment system. Admins can manage products through a dedicated dashboard.",
    technologies: ["React.js", "Node.js", "CSS", "Bootstrap"],
    features: [
      "User authentication and profiles",
      "Product browsing with advanced filters",
      "Wishlist and favorites",
      "Secure checkout process",
      "Order history and tracking",
      "Admin panel for inventory management",
    ],
  },
  kindergarten: {
    icon: "👶",
    title: "Angel's Empyrean Kindergarten",
    category: "Educational Institution Website",
    description:
      "A responsive website for a kindergarten that enhances user experience across all devices. Features include program information, photo galleries, FAQ sections, and comprehensive contact information for parents.",
    technologies: ["React.js", "Node.js", "CSS", "Bootstrap"],
    features: [
      "Responsive design for all devices",
      "Program details and curriculum",
      "Photo gallery showcase",
      "FAQ section for parents",
      "Contact and enrollment forms",
      "Staff information and credentials",
    ],
  },
  attendance: {
    icon: "👤",
    title: "Employee Attendance System with Face Recognition",
    category: "AI-Powered Attendance Tracking",
    description:
      "A responsive Employee Attendance Management System, powered by facial recognition, allows administrators to register new employees, automate attendance marking, and track department and employee attendance statistics.",
    technologies: ["Vite (React.js)", "Flask", "Python", "Firestore"],
    features: [
      "Facial recognition technology",
      "Automated attendance marking",
      "Employee registration system",
      "Detailed attendance reports",
      "Real-time monitoring dashboard",
      "Export functionality for reports",
    ],
  },
}

// Mouse spotlight effect
let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  const spotlight = document.querySelector(".spotlight")
  spotlight.style.setProperty("--x", mouseX + "px")
  spotlight.style.setProperty("--y", mouseY + "px")
})

// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const body = document.body

const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  if (theme === "dark") {
    icon.className = "fas fa-sun"
  } else {
    icon.className = "fas fa-moon"
  }
}

updateThemeIcon(currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})

// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    if (body.getAttribute("data-theme") === "dark") {
      navbar.style.background = "rgba(15, 23, 42, 0.98)"
    }
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    if (body.getAttribute("data-theme") === "dark") {
      navbar.style.background = "rgba(15, 23, 42, 0.95)"
    }
  }
})

// Interactive Background Canvas
class InteractiveBackground {
  constructor() {
    this.canvas = document.getElementById("backgroundCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    this.mouse = { x: 0, y: 0 }
    this.init()
  }

  init() {
    this.resize()
    this.createParticles()
    this.animate()
    this.bindEvents()
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000)
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${220 + Math.random() * 30}, 70%, 60%)`,
      })
    }
  }

  updateParticles() {
    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      // Mouse interaction
      const dx = this.mouse.x - particle.x
      const dy = this.mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const force = (100 - distance) / 100
        particle.vx += dx * force * 0.001
        particle.vy += dy * force * 0.001
      }

      // Boundary collision
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y))
    })
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle) => {
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      this.ctx.fillStyle = particle.color.replace("60%", `60%, ${particle.opacity})`)
      this.ctx.fill()
    })

    // Draw connections
    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 80) {
          this.ctx.beginPath()
          this.ctx.moveTo(particle.x, particle.y)
          this.ctx.lineTo(otherParticle.x, otherParticle.y)
          this.ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - distance / 80)})`
          this.ctx.lineWidth = 1
          this.ctx.stroke()
        }
      })
    })
  }

  animate() {
    this.updateParticles()
    this.drawParticles()
    requestAnimationFrame(() => this.animate())
  }

  bindEvents() {
    window.addEventListener("resize", () => this.resize())

    document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    })
  }
}

// Project Modal Functionality
const projectModal = document.getElementById("projectModal")
const modalOverlay = document.querySelector(".modal-overlay")
const modalClose = document.querySelector(".modal-close")

function openProjectModal(projectKey) {
  const project = projectData[projectKey]
  if (!project) return

  // Populate modal content
  document.querySelector(".modal-icon").textContent = project.icon
  document.querySelector(".modal-title").textContent = project.title
  document.querySelector(".modal-category").textContent = project.category
  document.querySelector(".modal-description").textContent = project.description

  // Populate technologies
  const techTags = document.querySelector(".tech-tags")
  techTags.innerHTML = ""
  project.technologies.forEach((tech) => {
    const tag = document.createElement("span")
    tag.className = "tag"
    tag.textContent = tech
    techTags.appendChild(tag)
  })

  // Populate features
  const featuresList = document.querySelector(".features-list")
  featuresList.innerHTML = ""
  project.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    featuresList.appendChild(li)
  })

  // Show modal
  projectModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProjectModal() {
  projectModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Project card click handlers
document.querySelectorAll(".project-card-simple").forEach((card) => {
  card.addEventListener("click", () => {
    const projectKey = card.getAttribute("data-project")
    openProjectModal(projectKey)
  })
})

// Modal close handlers
modalClose.addEventListener("click", closeProjectModal)
modalOverlay.addEventListener("click", closeProjectModal)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal()
  }
})

function downloadResume() {
  // Path to your existing PDF file
  const pdfPath = "Keerthana_b_v.pdf"; 

  // Create a temporary <a> to trigger the download
  const a = document.createElement("a");
  a.href = pdfPath;
  a.download = "keerthana_b_v.pdf"; //
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.getElementById("resumeBtn").addEventListener("click", downloadResume);


// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// 3D Text hover effects
document.addEventListener("DOMContentLoaded", () => {
  // Initialize interactive background
  new InteractiveBackground()

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".education-card, .project-card-simple, .strength-item, .contact-item",
  )
  animateElements.forEach((el) => {
    el.classList.add("animate-on-scroll")
    observer.observe(el)
  })
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = 0.3 + index * 0.1
    shape.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Enhanced 3D effects for contact items
document.querySelectorAll(".contact-3d").forEach((item) => {
  item.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 8
    const rotateY = (centerX - x) / 8

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  })

  item.addEventListener("mouseleave", function () {
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  })
})

// Project cards enhanced 3D tilt effect
document.querySelectorAll(".project-card-simple").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  })
})

// Skill tags enhanced hover effect
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.05) rotateZ(2deg)"
    this.style.boxShadow = "0 15px 30px rgba(37, 99, 235, 0.4)"
  })

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1) rotateZ(0deg)"
    this.style.boxShadow = "0 5px 15px var(--shadow)"
  })
})

// Hire me buttons
document.querySelectorAll(".hire-btn, .btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
  // Scroll-based animations here
}, 16) // ~60fps

window.addEventListener("scroll", throttledScroll)

// Smooth reveal animations for sections
const revealElements = document.querySelectorAll("section")
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 },
)

revealElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  revealObserver.observe(el)
})


 document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'keerthana_b_v.pdf';
    link.download = 'keerthana_b_v.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download completion message
    setTimeout(() => {
      const msg = document.getElementById('downloadMsg');
      msg.style.display = 'block';

      // Optional: Hide after 3 seconds
      setTimeout(() => {
        msg.style.display = 'none';
      }, 3000);
    }, 1000);  // Wait 1 second before showing message
  });