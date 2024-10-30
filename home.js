document.addEventListener('DOMContentLoaded', () => {
    // Existing GSAP animations
    gsap.from(".main-content h1", {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "bounce"
    });

    gsap.from(".main-content p", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        y: 20
    });

    gsap.from(".buttons button", {
        duration: 1,
        opacity: 0,
        delay: 1,
        y: 20,
        stagger: 0.3
    });

    gsap.from(".info-text", {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".info-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".info-image img", {
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".info-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".card", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".festivals-section",
            start: "top 80%",
            toggleActions: "play none none none",
            stagger: 0.3
        }
    });




// Ensure GSAP is loaded in your project
document.querySelectorAll('.event-card').forEach((card) => {
  const image = card.querySelector('.event-image');

  card.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
  });
});
