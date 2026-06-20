function openCV() {
    document.getElementById("cvModal").style.display = "flex";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
    let modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}