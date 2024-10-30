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


// Select elements
const cardContainer = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");
const cardCount = cards.length;
let currentIndex = 0;

// Adjust the total number of visible cards based on screen size
function adjustVisibleCards() {
    const screenWidth = window.innerWidth;
    let visibleCount = 3; // Default visible cards

    if (screenWidth >= 768) {
        visibleCount = 3; // Example: Show 3 cards
    } else if (screenWidth >= 640) {
        visibleCount = 2; // Show 2 cards for medium screens
    } else {
        visibleCount = 1; // Show 1 card for small screens
    }

    // Hide all cards and show only the required number
    cards.forEach((card, index) => {
        card.style.display = index < visibleCount ? 'block' : 'none';
    });
}

// Initialize cards visibility
adjustVisibleCards();

// Move cards left or right
function moveCards(direction) {
    if (direction === "right") {
        currentIndex = (currentIndex + 1) % cardCount;
    } else {
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    }

    // Animate the card movement
    gsap.to(cardContainer, {
        x: -currentIndex * 290, // Move by card width
        duration: 0.5,
        ease: "power2.out"
    });
}

// Event listeners for icons
document.querySelector('.icon-right').addEventListener('click', () => moveCards("right"));
document.querySelector('.icon-left').addEventListener('click', () => moveCards("left"));

// Handle window resize to adjust visible cards
window.addEventListener('resize', adjustVisibleCards);



