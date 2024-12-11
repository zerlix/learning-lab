const endpoint = "https://storage01.dbe.academy/fswd/travel-api.php";

// Funktion zum Anzeigen eines Tooltips
function showTooltip(element, message) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = message;
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "#f8d7da";
  tooltip.style.color = "#721c24";
  tooltip.style.padding = "5px 10px";
  tooltip.style.border = "1px solid #f5c6cb";
  tooltip.style.borderRadius = "5px";
  tooltip.style.fontSize = "12px";
  tooltip.style.top = `${element.offsetTop - element.offsetHeight}px`;
  tooltip.style.left = `${element.offsetLeft}px`;
  tooltip.style.zIndex = "1000";

  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 3000);
}

// Event Listener für das Formular
document.querySelector("#form-fluege")?.addEventListener("submit", async function (e) {
  e.preventDefault(); // Verhindert das normale Absenden des Formulars

  const overlay = document.getElementById("overlay");
  const mainContent = document.querySelector("main");

  const vonInput = document.querySelector("#input-von");
  const nachInput = document.querySelector("#input-nach");
  const datumInput = document.querySelector("input[type='date']");

  if (overlay && mainContent) {
    let data;

    // Formulardaten sammeln
    const von = vonInput?.value;
    const nach = nachInput?.value;
    const abflug = datumInput?.value;

    // Überprüfen, ob alle notwendigen Eingaben vorhanden sind
    let valid = true;

    if (!von) {
      showTooltip(vonInput, "Bitte geben Sie einen Abflugort ein.");
      valid = false;
    }

    if (!nach) {
      showTooltip(nachInput, "Bitte geben Sie einen Zielort ein.");
      valid = false;
    }

    if (!abflug) {
      showTooltip(datumInput, "Bitte wählen Sie ein Datum aus.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    // URL mit den Formulardaten erstellen
    const requestUrl = `${endpoint}?start=${encodeURIComponent(von)}&ziel=${encodeURIComponent(nach)}&datum=${encodeURIComponent(abflug)}`;

    // Overlay anzeigen
    overlay.classList.remove("hidden");

    // Fetch-Request 
    try {
      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
      }
      
      data = await response.json(); // JSON-Daten parsen

    } catch (error) {
      mainContent.textContent = `Fehler beim Laden der Daten: ${error.message}`;
    } finally {
      // Overlay nach einer kurzen Verzögerung ausblenden
      setTimeout(() => overlay.classList.add("hidden"), 1000);

      // Flüge formatieren und im Main-Bereich anzeigen
      if (data) {
        mainContent.innerHTML = ""; // Vorherigen Inhalt leeren

        data.forEach(flug => {
          const flugArticle = document.createElement("article");
          flugArticle.classList.add("flugbox");

          flugArticle.innerHTML = `
            <div class="flug-container">
                <div class="flug-details">
                    <div class="flug-connection">
                        <div class="flug-start">
                            <span class="time">${flug.startZeit}</span>
                            <span class="location">${flug.start}</span>
                        </div>
        
                        <div class="line-wrapper">
                            <div class="line"></div>
                            <div class="stops">${flug.stops === 0 ? "Nonstop" : `${flug.stops}<br>Stopp`}</div>
                            <div class="line"></div>
                        </div>
        
                        <div class="flug-end">
                            <span class="time">${flug.endZeit}</span>
                            <span class="location">${flug.ziel}</span>
                        </div>
                    </div>
                    <div class="terminal">Terminal: ${flug.terminal}</div>
                    <div class="dauer">
                        <span>Dauer: ${flug.flugdauer}</span>
                    </div>
                </div>
        
                <div class="flug-preis-container">
                    <div class="flug-preise">
                        <p class="preis"><span class="preis-type">Economy</span><br>ab<br> <span class="preis-amount">${flug.preis.economy.replace(" EUR", "")}</span><br> EUR</p>
                    </div>
        
                    <div class="flug-preise">
                        <p class="preis"><span class="preis-type">Business</span><br>ab<br> <span class="preis-amount">${flug.preis.business.replace(" EUR", "")}</span><br> EUR</p>
                    </div>
                </div>
            </div>
          `;

          mainContent.appendChild(flugArticle);
        });
      }
    }
  }
});

