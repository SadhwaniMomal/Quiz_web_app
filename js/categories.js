 // Function to navigate to a specific page with a slide-in animation
 function navigateToPage(page) {
    // Apply slide-in effect before navigating
    document.body.classList.add('slide-in');
    setTimeout(function() {
      window.location.href = page;
    }, 500); // Delay to match the animation duration
  }

  // Show each card one by one
  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.category-card');
    let delay = 0;

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in');
      }, delay);
      delay += 800; // Wait for the animation to finish before showing the next card
    });
  });