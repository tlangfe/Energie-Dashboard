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

## „HTTP ERROR 401“ beim Öffnen

Das kommt von GitHub, nicht von Home Assistant: Der Port ist privat, und der Browser hat keine GitHub-Anmeldung mitgeschickt.

1. Den Tab einmal neu laden (F5). Im selben Browser öffnen, in dem du bei GitHub angemeldet bist.
2. Hilft das nicht: unten **Ports** › rechte Maustaste auf **Home Assistant (8123)** › **Port Visibility** › **Public**, dann erneut das Globus-Symbol. Dann ist die HA-Anmeldeseite für jeden mit der Adresse erreichbar; nach dem Test den Codespace löschen oder den Port wieder auf **Private** stellen.

## Wenn Home Assistant nicht startet

1. Im Terminal unten eingeben und Enter drücken:

   ```bash
   node .devcontainer/setup.mjs log
   ```

   Das zeigt die letzten Zeilen des HA-Protokolls und, falls erkennbar, den Grund.
2. Einrichtung erneut starten (wartet bis zu 10 Minuten auf HA):

   ```bash
   node .devcontainer/setup.mjs
   ```

3. Hilft das nicht: Codespace neu bauen mit **F1** › **Codespaces: Rebuild Container**, oder den Codespace unter https://github.com/codespaces löschen und über den Knopf in der README neu anlegen. Ein neu angelegter Codespace hat immer den neuesten Stand.
