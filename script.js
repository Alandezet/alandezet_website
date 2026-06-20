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

// --- NEW SYSTEM: DYNAMIC TICKER ENGINE ---
async function loadTickerData() {
    const tickerContainer = document.getElementById("dynamic-ticker");
    
    try {
        // Fetch ticker.txt relative to your root path
        const response = await fetch('ticker.txt');
        if (!response.ok) throw new Error('Could not load ticker file.');
        
        const data = await response.text();
        const lines = data.split('\n');
        
        let priorityItems = [];
        let nameItems = [];
        let standardItems = [];
        
        // Parse each row and check for priority status
        lines.forEach(line => {
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
        
        // Combine them: Names and Priority statements go straight to the front of the line
        const completeManifest = [...nameItems, ...priorityItems, ...standardItems];
        
        // Duplicate the list inside the ticker to ensure infinite smooth scrolling loop
        const continuousStream = [...completeManifest, ...completeManifest, ...completeManifest];
        
        tickerContainer.innerHTML = continuousStream.join('');
        
    } catch (error) {
        console.error(error);
        // Fallback banner just in case the text file fails to read
        tickerContainer.innerHTML = '<span class="ticker-item">SYSTEM ACTIVE // ERROR PARSING MANIFEST // PLEASE HIRE ME 😭😭</span>';
    }
}

// Boot up the engine when the DOM load completes
document.addEventListener("DOMContentLoaded", loadTickerData);
