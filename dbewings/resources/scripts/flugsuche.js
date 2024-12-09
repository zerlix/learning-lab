const endpoint = "https://storage01.dbe.academy/fswd/travel-api.php?start=gibtsnicht&ziel=nirgendwo&datum=05.12.2024";
/*
    Daten per Fetch holen und im Main-Bereich anzeigen
*/
document.querySelector("#form-fluege")?.addEventListener("submit", async function (e) {
  e.preventDefault(); // Verhindert das normale Absenden des Formulars

  const overlay = document.getElementById("overlay");
  const mainContent = document.querySelector("main");

  if (overlay && mainContent) {
    // Overlay anzeigen
    overlay.classList.remove("hidden");

    let data;

    // Fetch-Request 
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
      }
      
      data = await response.json(); // JSON-Daten parsen

    } catch (error) {
      mainContent.textContent = `Fehler beim Laden der Daten: ${error.message}`;
    } finally {
      // Overlay spielerei - Timer extra eingebaut wird nach kurzer Zeit ausblenden
      setTimeout(() => overlay.classList.add("hidden"), 1000);
      // JSON-Daten im Main-Bereich anzeigen
      mainContent.textContent = JSON.stringify(data, null, 2); // Formatierte JSON-Ausgabe
    }
  }
});