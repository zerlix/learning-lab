const endpoint = "https://storage01.dbe.academy/fswd/travel-api.php";

// Event Listener für das Formular
document.querySelector("#form-fluege")?.addEventListener("submit", async function (e) {
  e.preventDefault(); // Verhindert das normale Absenden des Formulars

  const overlay = document.getElementById("overlay");
  const mainContent = document.querySelector("main");

  if (overlay && mainContent) {
    let data;

    // Formulardaten sammeln
    const von = document.querySelector("#input-von")?.value;
    const nach = document.querySelector("#input-nach")?.value;
    const abflug = document.querySelector("input[type='date']")?.value;

    // Überprüfen, ob alle notwendigen Eingaben vorhanden sind
    if (!von || !nach || !abflug) {
      mainContent.textContent = "Bitte füllen Sie alle Felder aus.";
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

      // JSON-Daten im Main-Bereich anzeigen
      if (data) {
        mainContent.textContent = JSON.stringify(data, null, 2); // Formatierte JSON-Ausgabe
      }
    }
  }
});
