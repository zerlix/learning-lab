// Hamburger-Menü anzeigen / ausblenden
const hamburger = document.getElementById('hamburger-button');
const menu = document.getElementById('hamburger-menu');
hamburger.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});


// Tabs Formularfeld
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const tabId = link.getAttribute('data-tab');
        const tabPane = document.getElementById(tabId);

        // Aktiviere den aktuellen Tab
        link.classList.add('active');
        link.classList.remove('inactive');
        tabPane.classList.add('active');

        // Deaktiviere die anderen Tabs
        tabLinks.forEach((otherLink) => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
                otherLink.classList.add('inactive');
                const otherTabId = otherLink.getAttribute('data-tab');
                const otherTabPane = document.getElementById(otherTabId);
                otherTabPane.classList.remove('active');
            }
        });
    });
});


// Slider ein-/ausblenden
function toggleSlider() {
    const slider = document.querySelector('.form-hidden-inputs');
    slider.style.display = slider.style.display === 'block' ? 'none' : 'block';
}

// Funktion, um die Anzeige des Labels zu aktualisieren
function updateDisplay() {
    // Holen des Slider-Werts
    const sliderValue = document.getElementById('passengerSlider').value;

    // Holen des Werts des ausgewählten Radio-Buttons
    const selectedClass = document.querySelector('input[name="class"]:checked').value;

    // Anpassen der Beschriftung im Icon
    const iconLabel = document.getElementById('icon-label');
    if (iconLabel) {
        iconLabel.textContent = `${sliderValue} Reisender${sliderValue > 1 ? 'n' : ''}, ${selectedClass}`;
    }
}

// Overlay
document.querySelector("#form-fluege").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");
    setTimeout(() => {
        overlay.classList.add("hidden"); 
    }, 3000);
});


document.getElementById('form-icon-filter').addEventListener('click', function() {
    const hiddenInputs = document.querySelector('.form-hidden-inputs');
    hiddenInputs.classList.toggle('show');
});


// Swap search input
document.addEventListener('DOMContentLoaded', function() {
    const swapIcon = document.getElementById('swap-icon');
    const inputVon = document.getElementById('input-von');
    const inputNach = document.getElementById('input-nach');

    if (swapIcon && inputVon && inputNach) {
        swapIcon.addEventListener('click', function() {
            const tempValue = inputVon.value;
            inputVon.value = inputNach.value;
            inputNach.value = tempValue;

        });
    } else {
        console.error('Ein oder mehrere Elemente wurden nicht gefunden.');
    }
});



