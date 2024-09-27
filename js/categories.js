// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".category-card");
  let delay = 0;

  // Add fade-in animation to each card one by one
  cards.forEach((card) => {
    setTimeout(() => {
      card.classList.add("fade-in");
      card.style.opacity = 1;
    }, delay);
    delay += 800;
  });
});

// Function to navigate to a specific page with a slide animation
function navigateToPage(page) {
  // Get the body or a specific container to apply the slide-out class
  const body = document.querySelector(".body-container");
  body.classList.add("slide-out");

  // Wait for the animation to finish before navigating
  setTimeout(() => {
    window.location.href = page; // Navigate to the new page
  }, 500); // Match this duration to your animation duration
}
