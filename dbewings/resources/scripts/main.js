/*
   Hamburger-Menü anzeigen / ausblenden
*/
const hamburger = document.getElementById('hamburger-button');
const menu = document.getElementById('hamburger-menu');

hamburger?.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle die Klasse "open"
});



/*
    Tabs Formularfeld
*/
const tabLinks = document.querySelectorAll('.tab-link');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Tab-ID aus dem data-tab-Attribut des Links holen
        const tabId = link.getAttribute('data-tab');
        const tabPane = document.getElementById(tabId);

        // Aktiviere den aktuellen Tab und dessen Inhalt
        link.classList.add('active');
        link.classList.remove('inactive');
        tabPane.classList.add('active');
        
        // Deaktiviere die anderen Tabs und deren Inhalte
        tabLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.add('inactive');  // Setze die Klasse 'inactive'
                otherLink.classList.remove('active'); // Entferne die Klasse 'active'
                const otherTabId = otherLink.getAttribute('data-tab');
                const otherTabPane = document.getElementById(otherTabId);
                if (otherTabPane) {
                    otherTabPane.classList.remove('active'); // Entferne 'active' vom anderen Tab-Inhalt
                }
            }
        });
    });
});



/*
    verstecktes Formular ein-/ausblenden 
*/
document.getElementById('form-icon')?.addEventListener('click', () => {
    const hiddenInputs = document.querySelector('.form-hidden-inputs');
    if (hiddenInputs) {
        // Überprüfen, ob das Element aktuell sichtbar ist und es umschalten
        if (hiddenInputs.style.display === 'block') {
            hiddenInputs.style.display = 'none'; // Verstecke das Element
        } else {
            hiddenInputs.style.display = 'block'; // Mache das Element sichtbar
        }
    }
});


// Label des icon aktualisieren ( Anzahl Reisende und Klasse)
function updateDisplay() {
    const sliderValue = document.getElementById('passengerSlider')?.value;
    const selectedClass = document.querySelector('input[name="class"]:checked')?.value;
    const iconLabel = document.getElementById('icon-label');

    if (sliderValue && selectedClass && iconLabel) {
        iconLabel.textContent = `${sliderValue} Reisender${sliderValue > 1 ? 'n' : ''}, ${selectedClass}`;
    }
}

/*
    Formular Suchfelder tauschen ( von<=>nach )
*/
    document.addEventListener('DOMContentLoaded', () => {
    const swapIcon = document.getElementById('swap-icon');
    const inputVon = document.getElementById('input-von');
    const inputNach = document.getElementById('input-nach');

    if (swapIcon && inputVon && inputNach) {
        swapIcon.addEventListener('click', () => {
            [inputVon.value, inputNach.value] = [inputNach.value, inputVon.value];
        });
    } else {
        console.error('Ein oder mehrere Elemente wurden nicht gefunden.');
    }
});

