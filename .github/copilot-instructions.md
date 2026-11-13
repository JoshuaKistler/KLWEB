# KLWEB – Projektanweisungen

- Firmenname: Kistler & Läubli Webauftritte; Kurzname: KLWEB.
- Zielgruppe: kleine Unternehmen in der Schweiz, z. B. Coiffeursalons und Handwerksbetriebe.
- Angebot: Webdesign und Websites für Unternehmen, die keinen Onlineshop benötigen.
- Positionierung: faire, transparente Preise, gute Qualität und technische Betreuung im vereinbarten Umfang.
- Schreibstil: klares Schweizer Standarddeutsch, kein Dialekt, Schweizer Schreibweise (ss statt ß), freundlich und verständlich. Verwende die Du-Ansprache konsistent.
- Seiten: Startseite, Leistungen, Ablauf, Projekte, Über uns, Kontakt, Impressum und Datenschutz.
- Prozess: Analyse und Gespräch, Designprototyp, Entwicklung, Testing und Launch, Betreuung.
- Bisheriges Referenzprojekt: Leharts, Website einer Künstlerin: https://joshuakistler.github.io/leharts2/
- Leharts ist vorerst das einzige angegebene Referenzprojekt. Keine weiteren Kunden, Bewertungen, Zahlen oder Erfolge erfinden.
- Niemals echte Firmen-, Kontakt-, Adress-, UID-, MWST- oder Rechtsangaben erfinden. Unbekannte Angaben als deutlich sichtbare Platzhalter wie [[FIRMA]] kennzeichnen und vor Veröffentlichung als zu ersetzen markieren.
- Mockup-Kontaktdaten und unbestätigte Rechtstexte dürfen nicht unbemerkt produktiv veröffentlicht werden.
- Bevorzuge eine schnelle, schlanke, responsive und möglichst statische Website. Prüfe zuerst das bestehende Repo und dessen Technologie. Falls es leer ist, schlage Astro, TypeScript und normales CSS vor.
- Keine unnötigen Abhängigkeiten, Tracker, Analytics, externen Fonts, Maps, Social-Embeds oder Cookies hinzufügen. Vor jeder externen Einbindung erklären, welche Daten sie übertragen kann.
- Barrierefreiheit berücksichtigen: semantisches HTML, Tastaturbedienung, sichtbare Fokuszustände, gute Kontraste, sinnvolle Alt-Texte und prefers-reduced-motion.
- Keine Animationen, die Inhalte oder Bedienbarkeit stören. Animationen dezent und mit prefers-reduced-motion unterstützen.
- Bestehende Architektur nicht ohne Grund ersetzen. Änderungen klein halten; vor grösseren Änderungen zuerst einen Plan nennen.
- Nach Änderungen vorhandene Build-, Lint- und Testbefehle ausführen, sofern vorhanden, und Ergebnisse sowie offene Probleme nennen.

## Technische Notizen (für weitere Arbeitsschritte)

- Das Projekt liegt in `website/` (Astro, statische Ausgabe, TypeScript, normales CSS). Build: `cd website; npm run build`. Es gibt keine Lint- oder Testskripte.
- Im Arbeitsnetzwerk sind Downloads (Node, npm-Pakete usw.) gesperrt. `node_modules` ist vorhanden. Keine neuen Pakete installieren. Wenn ein Download nötig wäre: stoppen, dem Nutzer sagen, was er tun muss, und auf sein Go warten.
- Neue Seiten verwenden `BaseLayout` mit `title` und `description`. Navigation und Rechtslinks sind in `src/data/navigation.ts` definiert; die aktive Seite wird automatisch über `aria-current` markiert.
- Designsystem: Tokens und Basisklassen (`.container`, `.section`, `.eyebrow`, `.lead`, `.btn`, `.btn--primary`, `.btn--secondary`, `.fade-up`) liegen in `src/styles/global.css`. Abschnittsstyles wie `.section-head`, `.text-link`, `.btn--large`, `.btn--light`, `.cta-box` und Karten sind derzeit **scoped** in `index.astro` und als Kopie in `leistungen.astro` und `ablauf.astro`. Für neue Seiten das Muster aus `leistungen.astro` übernehmen (Seitenkopf `.page-hero`, Abschluss-CTA „Projekt anfragen“ → `/kontakt`). Eine Auslagerung in `global.css` oder in Komponenten ist sinnvoll, sollte aber als eigener Schritt mit Absprache erfolgen, weil sie die Startseite betrifft.
- Prüfung im eingebetteten VS-Code-Browser: `setViewportSize` und Tastatureingaben funktionieren dort unzuverlässig (Tab bewegt den Fokus nicht). Element-Screenshots (`locator.screenshot`, `scrollIntoViewIfNeeded`) hängen, `screenshotPage` zeigt oft nur einen veralteten Ausschnitt. Für Responsive-Prüfungen die Seite in einem gleich-origin `iframe` mit fester Breite laden und `scrollWidth` messen. Der Dev-Server läuft nicht immer; bei Bedarf `npx astro preview --port 4321` nach dem Build starten.
- Visuelle Ganzseiten-Screenshots: lokales Edge headless (`msedge.exe --headless=new --screenshot=… --window-size=1280,4200 <url>`, jeweils neuer Dateiname und eigenes `--user-data-dir`). Edge headless hat eine Mindestfensterbreite (~500 px); für Mobil eine temporäre HTML-Datei mit `<iframe src="http://localhost:4321/…" style="width:375px">` rendern, sonst wirkt der Inhalt fälschlich abgeschnitten.
- Ablauf-Seite (`/ablauf`) hat Sprungziele pro Schritt: `#analyse`, `#designprototyp`, `#entwicklung`, `#testing-launch`, `#betreuung` – für Deep-Links von anderen Seiten nutzbar.
- Edge headless: `--virtual-time-budget=3000` ergänzen, sonst zeigt der Screenshot den Seitenkopf mitten in der `.fade-up`-Animation (Lead und Buttons fehlen scheinbar).
- Responsive-Messung per `runPlaywrightCode` im geteilten Browser-Tab: auf eine Seite des Preview-Servers navigieren, ein same-origin `iframe` (z. B. 320/375/768 px) einfügen und `scrollWidth` mit `clientWidth` vergleichen. Auch 320 px prüfen.
- Grid-Falle: Einspaltige Grids mit langen, nicht umbrechenden Inhalten (Platzhalter wie `[[…]]`, `white-space: nowrap`) laufen auf schmalen Geräten über. Spalten mit `minmax(0, 1fr)` definieren und bei Platzhaltern `overflow-wrap: anywhere` setzen.
- Projekte-Seite (`/projekte`, `src/pages/projekte.astro`): Daten stehen im Frontmatter (`realizedProjects`, `conceptProjects`). Sprungziele: `#realisierte-projekte`, `#konzeptarbeiten`. Konzeptarbeiten erhalten automatisch das Label „Fiktives Konzeptprojekt – kein Kundenauftrag“; die Liste ist bewusst leer (keine erfundenen Projekte), solange es keine echten eigenen Entwürfe gibt.
- **Offen vor Veröffentlichung – Zustimmung Leharts:** Ob die Auftraggeberin der Darstellung als Referenz und den verwendeten Inhalten zugestimmt hat, ist nicht bestätigt. In `projekte.astro` steht deshalb `consentConfirmed: false`; das erzeugt einen sichtbaren Platzhalter `[[ZUSTIMMUNG LEHARTS BESTÄTIGEN]]` und eine Warnung beim Build. Erst nach schriftlicher Zustimmung auf `true` setzen. Der Referenzabschnitt der Startseite (`index.astro`, `#referenz`) zeigt Leharts ebenfalls und hängt von derselben Zustimmung ab. Gezeigt wird nur ein abstraktes Browser-Mockup ohne Bilder der Künstlerin.
- Muster für sichtbare Platzhalter: `.todo-note` (scoped in `projekte.astro`, gestrichelter Kupferrahmen, `role="note"`, Text `[[…]]` plus „Vor Veröffentlichung ersetzen“). Für Kontakt, Impressum und Datenschutz dasselbe Muster verwenden.
- CTA-Texte: Standard ist „Projekt anfragen“ → `/kontakt`; auf `/projekte` heisst der CTA „Eigenes Projekt besprechen“ → `/kontakt`.
- Bestehende Seiten verlinken bereits auf `/kontakt`, `/ueber-uns`, `/impressum` und `/datenschutz`, die noch nicht existieren (Stand: Startseite, Leistungen, Ablauf, Projekte umgesetzt).
