// Function to handle the printable CV display overlay
function openCV() {
    document.getElementById("cvModal").style.display = "flex";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("cvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- SIMPLIFIED BULLETPROOF TICKER ENGINE ---
function initTicker() {
    const tickerContainer = document.getElementById("dynamic-ticker");
    if (!tickerContainer) return;

    // EDIT THIS NAME DIRECTLY ON GITHUB FROM YOUR PHONE!
    // Just swap out "Boss" for the manager's actual name.
    const managerName = "Boss"; 

    // All your text items are stored right here safely
    const items = [
        `<span class="ticker-item name-drop">🔥 Welcome to the matrix, ${managerName}. Let's make a deal. //</span>`,
        `<span class="ticker-item priority-alert">⚠️ PLEASE HIRE ME 😭😭 //</span>`,
        `<span class="ticker-item priority-alert">⚠️ EMPLOYEE OF THE CENTURY INBOUND //</span>`,
        `<span class="ticker-item">TRILINGUAL OPERATOR //</span>`,
        `<span class="ticker-item">BACKEND PYTHON ENGINE //</span>`,
        `<span class="ticker-item">100% EXAM PASSED ONLY 0% SLEEP //</span>`,
        `<span class="ticker-item">MY PC UPGRADES ARE DEPENDING ON YOU //</span>`
    ];

    // Combine them and repeat them 4 times to fill the screen for a smooth scrolling effect
    const fullStream = [...items, ...items, ...items, ...items];
    
    // Inject it directly into the HTML page
    tickerContainer.innerHTML = fullStream.join('');
}

// Run the script instantly as soon as the page loads
window.onload = initTicker;
