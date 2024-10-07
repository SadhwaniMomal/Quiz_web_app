function checkAnswer(button, isCorrect) {
    // Disable all buttons after one is clicked
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // Apply flip effect
    button.style.transition = 'transform 0.6s ease, background-color 0.6s ease';
    button.classList.add('flipped-btn');

    // After the flip animation, change the background color based on correctness
    setTimeout(() => {
        if (isCorrect) {
            button.classList.add('correct-option');
        } else {
            button.classList.add('incorrect-option');
        }

        // Flip back to the original position after the background color changes
        setTimeout(() => {
            button.classList.remove('flipped-btn');
            button.classList.add('flip-back-btn');
        }, 10); // Delay for flip-back after background color change
    }, 300); // Halfway through the flip
}
