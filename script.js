// Get the elements
const contactBtn = document.getElementById("contactBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Function to show the popup
contactBtn.addEventListener("click", function() {
    popup.style.display = "flex"; // Show the popup (using flexbox to center it)
});

// Function to close the popup
closeBtn.addEventListener("click", function() {
    popup.style.display = "none"; // Hide the popup
});

// Close the popup if the user clicks anywhere outside the popup content
window.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.style.display = "none"; // Hide the popup if clicked outside
    }
});
