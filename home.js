/* Font and base styles */
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap');
body {
    font-family: 'Inknut Antiqua', serif;
}

/* Background image */
.hero {
    background-image: url('event4.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
}

/* Background overlay */
.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
}

/* Navbar styles */
.navbar {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 10; /* Ensure the navbar is on top */
}

.logo {
    width: 80px;
    margin-left: 4rem;
}

.nav-item {
    color: white;
    font-weight: bold;
        font-size: 1.25rem;
    transition: color 0.3s;
}

.nav-item:hover {
    color: yellow;
}

.flex.mr-16 {
    margin-right: 4rem;
}

/* Main content */
.main-content h1 {
    font-size: 5rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.main-content p {
    font-size: 1.5rem;
}

/* Buttons */
.buttons .info-btn, .tickets-btn {
    width: 220px;
    height: 50px;
    border-radius: 30px;
    transition: all 0.3s ease;
}

.buttons .info-btn:hover, .tickets-btn:hover {
    background-color: white;
    color: black;
}

/* Responsive styles */
@media (max-width: 640px) {
    .navbar {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        text-align: center;
    }

    .logo {
        width: 50px; /* Shrink logo */
        margin-left: 0;
        margin-bottom: 1rem;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .nav-item {
        font-size: 1rem; /* Shrink nav links */
        margin: 0.5rem 0;
    }

    .flex.mr-16 {
        margin-right: 0;
    }

    .main-content h1 {
        font-size: 2.5rem;
    }

    .main-content p {
        font-size: 1rem;
    }

    .buttons {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .buttons .info-btn, .tickets-btn {
        width: 180px; /* Shrink buttons */
        height: 40px;
        margin-bottom: 1rem;
    }
}

/* Info Section */
.info-section {
    background-color: #252626; /* Background color */
}

.info-text {
    margin-left: 4rem;
    font-size: 20px;
}

.info-image img {
    width: 480px;
    height: 480px;
}

/* Responsive styles */
@media (max-width: 640px) {
 .info-text {
        margin-left: 0;
        text-align: center;
    }

    .info-image img {
        width: 100%; /* Make image responsive */
        height: auto;
    }
}



.events-section {
  padding: 40px;
  background-color: #252626;
  text-align: center;
}

.events-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffffff;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 10px;
}

.event-card {
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  position: relative;
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
}

.event-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}

.event-details {
  padding: 20px;
  color: #ffffff;
}

.event-details h3 {
  font-size: 1.5em;
  color: #ffffff;
}

.event-details p {
  color: #cccccc;
  margin: 5px 0;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
      border-radius: 30px;
        justify-content: center; /* Center the buttons horizontally */


}

.outline-button {
  width: 130px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
      border-radius: 30px;
}

.outline-button:hover {
  background-color: #ffffff;
  color: #252626;
}




/* Footer Section */
.footer-section {
    background-color: #252626;
    color: #ffffff;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
}

.footer-content {
    max-width: 97%;
    margin: 0 auto;
}

.footer-logo img {
    width: 2.5rem;
    height: 2.5rem;
}

.footer-contact span {
    font-size: 1rem;
    display: block;
}

.footer-social-icons a img {
    width: 1.5rem;
    height: 1.5rem;
}

.footer-nav {
    display: grid;
    grid-template-columns: 1fr; /* 1 column by default */
    gap: 1rem;
    text-align: left;
}

.footer-nav a {
    color: #ffffff;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
}

.footer-nav a:hover {
    color: #28a745;
}

.footer-legal {
    max-width: 95%;
    margin: 0 auto;
    border-top: 1px solid #ffffff;
    padding-top: 1rem;
    color: #b0b0b0; /* Dimmed color */
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-legal a {
    color: #b0b0b0;
    font-size: 0.75rem;
    margin-right: 1rem;
    transition: color 0.3s;
}

.footer-legal a:hover {
    color: #28a745;
}

/* Responsive styles */
@media (min-width: 768px) {
    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-nav {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on larger screens */
        text-align: center; /* Align text left on desktop */
    }

    .footer-legal {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}
