/*
   Hamburger-Menü anzeigen / ausblenden
*/
const hamburger = document.getElementById('hamburger-button');
const menu = document.getElementById('hamburger-menu');

hamburger?.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});



/*
    Tabs Formularfeld
*/
 const tabLinks = document.querySelectorAll('.tab-link');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const tabId = link.getAttribute('data-tab');
        const tabPane = document.getElementById(tabId);

        // Aktiviere den aktuellen Tab
        link.classList.add('active');
        tabPane.classList.add('active');

        // Deaktiviere andere Tabs
        tabLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
                const otherTabId = otherLink.getAttribute('data-tab');
                document.getElementById(otherTabId)?.classList.remove('active');
            }
        });
    });
});

/*
    verstecktes Formular ein-/ausblenden 
*/
document.getElementById('form-icon-filter')?.addEventListener('click', () => {
    const hiddenInputs = document.querySelector('.form-hidden-inputs');
    hiddenInputs?.classList.toggle('show');
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

