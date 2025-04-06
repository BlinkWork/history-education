/*--------------------------------------------------------------
# Document Ready
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  // Preloader
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 500);
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active");
      } else {
        backToTopButton.classList.remove("active");
      }
    });

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Initialize Swiper
  const gallerySwiper = document.querySelector(".gallery-swiper");
  if (gallerySwiper && typeof Swiper !== "undefined") {
    new Swiper(".gallery-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Initialize Cultural Swiper
  const culturalSwiper = document.querySelector(".cultural-swiper");
  if (culturalSwiper && typeof Swiper !== "undefined") {
    new Swiper(".cultural-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Initialize Testimonial Swiper
  const testimonialSwiper = document.querySelector(".testimonial-swiper");
  if (testimonialSwiper && typeof Swiper !== "undefined") {
    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Initialize FancyBox
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: [
          { id: "prev", position: "center" },
          { id: "counter", position: "center" },
          { id: "next", position: "center" },
          "zoom",
          "slideshow",
          "fullscreen",
          "download",
          "close",
        ],
      },
    });
  }

  // Counter animation
  const factNumbers = document.querySelectorAll(".fact-number");
  if (factNumbers.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = Number.parseInt(target.getAttribute("data-count"));
            let count = 0;
            const updateCount = () => {
              const increment = countTo / 100;
              if (count < countTo) {
                count += increment;
                target.textContent = Math.ceil(count);
                setTimeout(updateCount, 20);
              } else {
                target.textContent = countTo;
              }
            };
            updateCount();
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    factNumbers.forEach((number) => {
      counterObserver.observe(number);
    });
  }

  // Video Modal
  const videoModal = document.getElementById("videoModal");
  if (videoModal) {
    videoModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const iframe = videoModal.querySelector("iframe");
      // Set the video URL (replace with actual video URL)
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      );
    });

    videoModal.addEventListener("hidden.bs.modal", () => {
      const iframe = videoModal.querySelector("iframe");
      iframe.setAttribute("src", "about:blank");
    });
  }

  // 3D Model Modal
  const modelModal = document.getElementById("modelModal");
  if (modelModal) {
    modelModal.addEventListener("show.bs.modal", (event) => {
      const iframe = modelModal.querySelector("iframe");
      // Set the 3D model URL (replace with actual model URL)
      iframe.setAttribute("src", "about:blank");
    });

    modelModal.addEventListener("hidden.bs.modal", () => {
      const iframe = modelModal.querySelector("iframe");
      iframe.setAttribute("src", "about:blank");
    });
  }

  // GSAP Animations
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero section parallax effect
    gsap.to(".hero", {
      backgroundPosition: "50% 0%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }
});
