// Get the "Find Designers" text and dropdown list
const findDesigners = document.getElementById("find-designers");
const dropdownList = document.getElementById("dropdown-list");

// Show the dropdown list when hovering over the text
findDesigners.addEventListener("mouseenter", () => {
    dropdownList.style.display = "block";
});

// Hide the dropdown list when the mouse leaves the text or the list
findDesigners.addEventListener("mouseleave", () => {
    dropdownList.style.display = "none";
});

dropdownList.addEventListener("mouseenter", () => {
    dropdownList.style.display = "block";
});

dropdownList.addEventListener("mouseleave", () => {
    dropdownList.style.display = "none";
});

const scrollContainer = document.getElementById('scrollContainer');
let scrollSpeed = 1; // Change this value to adjust scroll speed (higher = faster)

function horizontalScroll() {
    // Increase the scrollLeft property of the container to scroll horizontally
    scrollContainer.scrollLeft += scrollSpeed;

    // Check if the scroll position reaches the end, if so, reset to the beginning
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }

    // Use requestAnimationFrame to create smooth animation
    requestAnimationFrame(horizontalScroll);
}

// Start the horizontal scroll animation
horizontalScroll();

function animateImages() {
    const container = document.getElementById('moving-images-container');
    const totalWidth = container.scrollWidth;
    let position = container.offsetWidth;

    function move() {
        position -= 1; // Move left
        container.style.transform = `translateX(${position}px)`;

        // Reset position when images are out of view
        if (position < -totalWidth) {
            position = container.offsetWidth;
        }

        requestAnimationFrame(move);
    }

    move(); // Start the animation
}

// Start the animation when the window loads
window.onload = animateImages;

