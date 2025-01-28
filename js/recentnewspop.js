// Get the modal element by its ID
const modal = document.getElementById("recent_news_pop");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".custom-close");

// Show the modal when the page loads
window.onload = function () {
    modal.style.display = "block";
};

// Close the modal when the "X" is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close the modal when the user clicks outside the modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
