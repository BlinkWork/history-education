/*--------------------------------------------------------------
# Authors Page Scripts
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }

  // Initialize Particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#3a5f41", "#8b6b4c", "#d2b48c"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#8b6b4c",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.getAttribute("data-width");
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    bar.setAttribute("data-width", bar.style.width);
    bar.style.width = "0";
    observer.observe(bar);
  });

  // Author Card Flip
  const author1 = document.getElementById("author1");
  const author2 = document.getElementById("author2");

  if (author1) {
    const flipBtns1 = author1.querySelectorAll(".flip-btn button");
    flipBtns1.forEach((btn) => {
      btn.addEventListener("click", () => {
        author1.classList.toggle("flipped");
      });
    });
  }

  if (author2) {
    const flipBtns2 = author2.querySelectorAll(".flip-btn button");
    flipBtns2.forEach((btn) => {
      btn.addEventListener("click", () => {
        author2.classList.toggle("flipped");
      });
    });
  }

  // Skill Progress Animation
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll(".skill-progress");
          skillBars.forEach((bar) => {
            const width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const authorCards = document.querySelectorAll(".author-card");
  authorCards.forEach((card) => {
    skillObserver.observe(card);
  });

  // Testimonial Slider
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");

  if (testimonialTrack && testimonialSlides.length > 0) {
    let currentIndex = 0;
    const slideWidth = 100; // 100%

    // Set initial position
    testimonialTrack.style.transform = `translateX(0%)`;

    // Update slider position
    function updateSlider() {
      testimonialTrack.style.transform = `translateX(-${
        currentIndex * slideWidth
      }%)`;
    }

    // Next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % testimonialSlides.length;
      updateSlider();
      stopAutoSlide();
    }

    // Previous slide
    function prevSlide() {
      currentIndex =
        (currentIndex - 1 + testimonialSlides.length) %
        testimonialSlides.length;
      updateSlider();
      stopAutoSlide();
    }

    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener("click", nextSlide);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", prevSlide);
    }
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    testimonialTrack.addEventListener("mouseenter", () => {
      stopAutoSlide();
    });

    testimonialTrack.addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  // GSAP Animations
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate header shapes
    gsap.to(".shape-1", {
      x: "100px",
      y: "50px",
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    gsap.to(".shape-2", {
      x: "-80px",
      y: "-30px",
      rotation: -360,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    gsap.to(".shape-3", {
      x: "60px",
      y: "-40px",
      rotation: 180,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    gsap.to(".shape-4", {
      x: "-50px",
      y: "60px",
      rotation: -180,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    // Animate author cards on scroll
    gsap.from("#author1", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#author1",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from("#author2", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#author2",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    // Animate stats on scroll
    const statItems = document.querySelectorAll(".stat-item");
    statItems.forEach((item, index) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? -50 : 50;
      gsap.from(item, {
        x: direction,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });
    });

    // Animate contact form
    gsap.from(".contact-form", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });

    // Animate contact info
    gsap.from(".contact-info", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
  }
});
