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
function updateDisplay() {
    const sliderValue = document.getElementById('passengerSlider').value;
    const selectedClass = document.querySelector('input[name="class"]:checked').value;
    const icon = document.querySelector('.form-icon');
    icon.innerHTML = `<img id="form-icon-filter" src="./resources/images/icon-tune.svg"> ${sliderValue} Reisende, ${selectedClass}`;

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
