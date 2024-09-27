
function flipContainer() {
    document.querySelector('.flip-container').classList.add('flipped');
}

document.getElementById('firstYearBtn').addEventListener('click', function() {
    flipContainer(); // Flip effect

    // Show the check icon and redirect after 2 seconds
    document.getElementById('checkIcon').classList.add('active');
    setTimeout(function() {
        window.location.href = '../firstYear/First_categories.html'; // Replace with your next page URL
    }, 2000);
});

document.getElementById('secondYearBtn').addEventListener('click', function() {
    flipContainer(); // Flip effect
    // Redirect to second year page after 2 seconds
    setTimeout(function() {
        window.location.href = '../Secondyear/second_categories.html'; // Replace with your second-year page URL
    }, 2000);
});