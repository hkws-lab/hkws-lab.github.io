// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get modal and buttons
    const modal = document.getElementById("news-modal");
    const openModalBtn = document.getElementById("open-news-popup");
    const closeModalBtn = document.getElementById("close-news-popup");

    // Open the modal when the button is clicked
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
