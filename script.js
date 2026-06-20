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

// --- BULLETPROOF ENGINE: ARRAYS DIRECTLY IN CODE ---
function loadTickerData() {
    const tickerContainer = document.getElementById("dynamic-ticker");
    
    // EDIT THESE LINES DIRECTLY ON GITHUB FROM YOUR PHONE!
    // Just change "Boss" to the manager's name before you walk in.
    const rawLines = [
        "[NAME] Welcome to the matrix, Boss. Let's make a deal. //",
        "[PRIORITY] PLEASE HIRE ME 😭😭 //",
        "[PRIORITY] EMPLOYEE OF THE CENTURY INBOUND //",
        "[STANDARD] TRILINGUAL OPERATOR //",
        "[STANDARD] BACKEND PYTHON ENGINE //",
        "[STANDARD] 100% EXAM PASSED ONLY 0% SLEEP //",
        "[STANDARD] MY PC UPGRADES ARE DEPENDING ON YOU //"
    ];
    
    let priorityItems = [];
    let nameItems = [];
    let standardItems = [];
    
    rawLines.forEach(line => {
        let cleanLine = line.trim();
        if (!cleanLine) return;
        
        if (cleanLine.startsWith('[PRIORITY]')) {
            let content = cleanLine.replace('[PRIORITY]', '').trim();
            priorityItems.push(`<span class="ticker-item priority-alert">⚠️ ${content}</span>`);
        } else if (cleanLine.startsWith('[NAME]')) {
            let content = cleanLine.replace('[NAME]', '').trim();
            nameItems.push(`<span class="ticker-item name-drop">🔥 ${content}</span>`);
        } else if (cleanLine.startsWith('[STANDARD]')) {
            let content = cleanLine.replace('[STANDARD]', '').trim();
            standardItems.push(`<span class="ticker-item">${content}</span>`);
        } else {
            standardItems.push(`<span class="ticker-item">${cleanLine}</span>`);
        }
    });
    
    // Assemble the list 
    const completeManifest = [...nameItems, ...priorityItems, ...standardItems];
    
    // Multiply the list so it continuously fills the screen width for the loop animation
    let continuousStream = [];
    const repeatCount = 4; 
    for (let i = 0; i < repeatCount; i++) {
        continuousStream = continuousStream.concat(completeManifest);
    }
    
    tickerContainer.innerHTML = continuousStream.join('');
}

// Boot up the engine when the page loads
document.addEventListener("DOMContentLoaded", loadTickerData);
