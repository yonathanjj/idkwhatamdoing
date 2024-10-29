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


document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = Array.from(cardsContainer.children);
    const cardCount = 4; // Number of cards to display at once
    let currentIndex = 0; // To track the current set of cards displayed

    // Function to render cards based on the current index
    const renderCards = () => {
        // Remove all current cards from the container
        cardsContainer.innerHTML = '';

        // Get the next set of cards to display
        const nextCards = cards.slice(currentIndex, currentIndex + cardCount);

        // Append the next set of cards to the container
        nextCards.forEach(card => {
            cardsContainer.appendChild(card);
        });
    };

    // Event listeners for the buttons
    document.querySelector('.icon-left').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= cardCount; // Move back by the card count
            renderCards(); // Update displayed cards
        }
    });

    document.querySelector('.icon-right').addEventListener('click', () => {
        if (currentIndex + cardCount < cards.length) {
            currentIndex += cardCount; // Move forward by the card count
            renderCards(); // Update displayed cards
        }
    });

    // Initial render
    renderCards();
});
