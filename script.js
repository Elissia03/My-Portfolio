const artContainer = document.querySelectorAll(".art-container");
function revealArtwork (entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

        }
    });
}
    const observer = new IntersectionObserver(revealArtwork);
artContainer.forEach(function(container) {
    observer.observe(container);
})