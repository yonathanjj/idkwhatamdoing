document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');

    // Function to add a new image
    function addImage(src) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image';

        const textOverlay = document.createElement('div');
        textOverlay.className = 'image-text';
        textOverlay.innerText = 'PSY Addis'; // Adding the text overlay

        gridItem.appendChild(img);
        gridItem.appendChild(textOverlay);
        galleryContainer.appendChild(gridItem);
    }

    // Example images to add
    const images = [
        'event1.jpg',
        'event2.jpg',
        'event3.jpg',
        'event4.jpg',
        'event5.jpg'
    ];

    // Adding images to the gallery
    images.forEach(src => addImage(src));

    // GSAP animation on load
    const gridItems = document.querySelectorAll('.grid-item');
    gsap.from(gridItems, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
    });
});

 function updateGalleryLayout() {
        const galleryContainer = document.querySelector('.gallery-container');
        const screenWidth = window.innerWidth;

        // Determine the number of columns based on the screen width
        let columns;
        if (screenWidth >= 1500) {
            columns = 5; // 5 images per row for larger screens
        } else if (screenWidth >= 1300) {
            columns = 4; // 4 images per row for mid-sized screens
        } else if (screenWidth >= 1000) {
            columns = 3; // 3 images per row for smaller laptops
        } else {
            columns = 2; // 2 images per row for mobile devices
        }

        // Set the CSS grid template columns property
        galleryContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }

    // Initial layout update
    updateGalleryLayout();

    // Update layout on window resize
    window.addEventListener('resize', updateGalleryLayout);
