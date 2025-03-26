function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
const aboutSection = document.getElementById("about");

// List of animations
const animations = ["fadeInSlide", "scaleUp", "rotateEffect"];
let animationIndex = 0;

function changeAnimation() {
    // Remove previous animation
    aboutSection.style.animation = "none";

    // Force reflow (restart animation)
    void aboutSection.offsetWidth;

    // Apply new animation
    aboutSection.style.animation = `${animations[animationIndex]} 1s ease-out forwards`;

    // Move to the next animation
    animationIndex = (animationIndex + 1) % animations.length;
}

// Change animation every 5 seconds
setInterval(changeAnimation, 5000);

// Apply first animation
changeAnimation();
