# Tagwolken-Mutation
Für meine Homepage benötige ich eine Tagwolke mit den Namen der von mir beherrschten Technologien (nach Wichtigkeit geordnet). Die Tagwolken-Library verteilt die Tags eher zufällig und mit unterschiedlicher Ausrichtung. Deshalb möchte ich die Tagwolken-Daten "ent-randomisieren" und über Mutation und Kreuzung neue Tagwolken erzeugen. Die schönsten wähle ich aus, diese kommen dann in den neuen "Genpool". Also eine Art genetischer Algorithmus mit mir als Fitness-Funktion ;-)

## Todo
- Geforkte D3 Cloud-Bibliothek so umbauen, dass Platzierung der Tags (in `size()`) und Spiralrichtung (`dt` in `place()`) nicht mehr zufällig ist.
- Datenmodell f. Tagwolken-Worte. Mögliche Gene sind:

   - Größe der Tags
   - Ausrichtung (senkrecht/waagerecht)
   - Skalierungsfaktor (wie stark die Grössenunterschiede zwischen Wichtigkeits-Ebenen variieren). Kann log oder sqrt sein, außerdem dann noch ein numerischer Faktor, mit dem multipliziert wird.
   - Schriftart (Name, Bold/nicht bold)
- Auswahl der schönsten Wolken (ggf. mit Zoom, damit mehrere Wolken am Bildschirm angzeigt werden können)
- Zwischenspeichern von Parametern
- Speichern des SVG
- Ggf. Direktanpassung einzelner Gene statt zufälliger Mutation (onlick-Handler f. )

## Ressourcen:
- [Tag Cloud Library][1]
- [D3][3]
- [Genetische Algorithmen][2]

[1]: http://www.jasondavies.com/wordcloud/about/
[2]: http://www.puremango.co.uk/2010/12/genetic-algorithm-for-hello-world/
[3]: https://github.com/mbostock/d3/wiki