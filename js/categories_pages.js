function goToNextPage(page) {
    const sound = document.getElementById("page-sound");
    sound.play();

    const slide = document.getElementById("chapters-slide");
    slide.classList.add("chapters-slide-active");

    setTimeout(() => {
        window.location.href = page;
    }, 500); // Match this with the CSS transition duration
}