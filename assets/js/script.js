// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.padding = "10px 0"
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        navbar.style.padding = "15px 0"
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
      }
    })
  }

  // Product thumbnail gallery
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.getElementById("main-product-image")

  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Remove active class from all thumbnails
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))

        // Add active class to clicked thumbnail
        this.classList.add("active")

        // Update main image
        const imgSrc = this.getAttribute("data-img")
        mainImage.src = imgSrc

        // Add fade effect
        mainImage.style.opacity = "0"
        setTimeout(() => {
          mainImage.style.opacity = "1"
        }, 100)
      })
    })
  }

  // Product color variants
  const colorVariants = document.querySelectorAll(".variant-option")

  if (colorVariants.length > 0) {
    colorVariants.forEach((variant) => {
      variant.addEventListener("click", function () {
        // Remove active class from all variants
        colorVariants.forEach((v) => v.classList.remove("active"))

        // Add active class to clicked variant
        this.classList.add("active")

        // Display selected color name
        const colorName = this.getAttribute("data-color")
        const colorDisplay = document.querySelector(".selected-color")
        if (colorDisplay) {
          colorDisplay.textContent = colorName
        }
      })
    })
  }

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".achievement-card, .product-card, .timeline-item, .achievement-card-alt",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll(
    ".achievement-card, .product-card, .timeline-item, .achievement-card-alt",
  )
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run animation on page load
  animateOnScroll()

  // Animate heritage features on scroll
  const animateHeritageFeatures = () => {
    const features = document.querySelectorAll(".heritage-feature-item, .preservation-activity, .impact-stat-item")

    features.forEach((feature, index) => {
      const featurePosition = feature.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (featurePosition < screenPosition) {
        setTimeout(() => {
          feature.style.opacity = "1"
          feature.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  }

  // Set initial state for heritage features
  const heritageFeaturesElements = document.querySelectorAll(
    ".heritage-feature-item, .preservation-activity, .impact-stat-item",
  )
  heritageFeaturesElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll for heritage features
  window.addEventListener("scroll", animateHeritageFeatures)

  // Run animation on page load for heritage features
  setTimeout(animateHeritageFeatures, 500)

  // Smooth scroll for tab navigation
  const tabLinks = document.querySelectorAll(".nav-tabs .nav-link")
  if (tabLinks.length > 0) {
    tabLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Add a small delay to allow the tab to switch
        setTimeout(() => {
          const tabContent = document.querySelector(this.getAttribute("href"))
          if (tabContent) {
            window.scrollTo({
              top: tabContent.offsetTop - 100,
              behavior: "smooth",
            })
          }
        }, 300)
      })
    })
  }

  // Load more button for community stories (placeholder functionality)
  const loadMoreBtn = document.querySelector(".load-more button")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang tải...'

      setTimeout(() => {
        this.innerHTML = "Xem thêm câu chuyện"
        alert("Tính năng đang được phát triển!")
      }, 1500)
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })
})

