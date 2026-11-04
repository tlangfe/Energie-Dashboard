# Test in GitHub Codespaces

Dieser Codespace startet ein **Test-Home-Assistant** mit Beispielsensoren und beiden Karten. Er läuft nur in GitHub, nicht bei dir zu Hause.

1. Warten, bis unten im Terminal `[energie-test] Fertig.` steht (beim ersten Start einige Minuten).
2. Home Assistant öffnet sich in einem neuen Browser-Tab. Falls nicht: unten auf **Ports** › Zeile **Home Assistant (8123)** › Globus-Symbol.
3. Anmelden mit **test** / **test1234**.
4. Links **Energie Test** wählen:
   - **Energie**: Hauptkarte und Schieberegler (Solar, Hausverbrauch, Akku, Ladestand, Gas, Wasser). Das Netz ergibt sich aus Haus − Solar − Akku.
   - **Auswertung (Pro)**: zweite Karte.
   - **Neu einrichten**: leere Karte, um die automatische Erkennung auszuprobieren (Bearbeiten › Karte bearbeiten › „Sensoren automatisch erkennen“).

Änderungen an `dist/energie-dashboard-card.js` sind nach dem Neuladen der Seite sichtbar. Wird die alte Fassung angezeigt: im Terminal `node .devcontainer/setup.mjs` ausführen, dann Seite neu laden.

Hinweise:
- Die Tageswerte stammen anfangs aus eingespielten Beispielwerten der letzten 48 Stunden, danach aus den Schiebereglern.
- Der Regelteil der Auswertung braucht einen Netz-Sensor mit etwa einem Wert pro Sekunde. Die Schieberegler ändern sich nur, wenn du sie bewegst, deshalb blendet die Karte die Reaktionszeiten hier aus.
- Zugangsdaten und Laufzeitdateien gelten nur für diesen Test und werden nicht ins Repository übernommen.
