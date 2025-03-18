// Example: Log current slide index on slide change
document.getElementById('carouselExample').addEventListener('slide.bs.carousel', (event) => {
    console.log('Slide changed to: ', event.to);
});
