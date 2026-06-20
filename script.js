// Opens the full screen CV image when clicking LAUNCH_CV.EXE
function openCV() {
    document.getElementById("cvModal").style.display = "flex";
}

// Closes the CV image popup when clicking the X button
function closeCV() {
    document.getElementById("cvModal").style.display = "none";
}

// Closes the popup if you tap anywhere outside the CV image
window.onclick = function(event) {
    let modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
