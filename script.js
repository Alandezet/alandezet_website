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

// --- UPGRADED TICKER ENGINE ---
async function loadTickerData() {
    const tickerContainer = document.getElementById("dynamic-ticker");
    
    try {
        // Added standard cache buster timestamp (?t=...) so changes drop instantly 
        const response = await fetch(`ticker.txt?t=${new Date().getTime()}`);
        if (!response.ok) throw new Error('Could not load ticker file.');
        
        const data = await response.text();
        
        // Split by both standard Unix (\n) and Windows (\r\n) line breaks cleanly
        const lines = data.split(/\r?\n/);
        
        let priorityItems = [];
        let nameItems = [];
        let standardItems = [];
        
        lines.forEach(line => {
            let cleanLine = line.trim();
            if (!cleanLine) return; // Skip completely blank lines
            
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
        
        // If the list is too short, multiply it so the screen stays completely full
        let continuousStream = [];
        const repeatCount = completeManifest.length < 4 ? 6 : 3;
        for (let i = 0; i < repeatCount; i++) {
            continuousStream = continuousStream.concat(completeManifest);
        }
        
        tickerContainer.innerHTML = continuousStream.join('');
        
    } catch (error) {
        console.error(error);
        tickerContainer.innerHTML = '<span class="ticker-item">SYSTEM ACTIVE // REBOOT REQUIRED // HIRE ME PLEASE 😭😭</span>';
    }
}

// Boot up the engine when the DOM load completes
document.addEventListener("DOMContentLoaded", loadTickerData);