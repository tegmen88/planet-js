# planet-js
Solaris är en webbplats byggd med HTML, CSS och vanilla JavaScript som visar information om solsystemets himlakroppar

# Projektets delar

#### HTML: 
##### Grundstruktur för att visa planetlistan och overlay.
#### CSS: 
##### Stilar för layout, planetkorten och overlay.
#### JavaScript:
##### api.js: Hanterar API-anrop för att hämta API-nyckel och himlakroppar.
##### ui.js: Renderar planetlistan och hanterar overlay (visa/dölj).
##### app.js: Huvudlogik för att initiera API-anrop och ansluta UI med data.


# Slutresultat
Planeter visas dynamiskt från API:et.
Klick på en planet öppnar en overlay med detaljer.
Inga fel i konsolen, och kodens struktur är modulär och lättläst.




API
Base URL

https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com
Methods

enpoint	method	desc
/keys	POST	returnerar en API nyckel.
/bodies	GET	returnerar alla stora himlakroppar i vårt solsystem.
Authentication

API:et är låst med en API-nyckel. Alla GET-request utan en sådan kommer generar en 401.

För att få läsrättigheter måste du i din request bifoga headern x-zocom med en giltig API-nyckel.

Ex.

let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': '<solaris-key-here>'}
})

Modell
egenskap	datatyp	enhet
id	number	-
type	string	star & planet
name	string	namnet på himlakroppen
latinName	string	Latinska namnet på himlakroppen
rotation	number	Längd på dygn i antal jorddygn runt sin egen axel
circumference	number	Omkrets i km
temp	Object	Temperatur day och night i celcius.
distance	number	km från solen
orbitalPeriod	Number	Antal jorddygn runt solen
desc	string	Beskrivning av himlakroppen
moons	Array	Lista med månarnas namn

Exempel

{
    id: 2,
    type: 'planet',
    name: 'Venus',
    latinName: 'Venus',
    rotation: 116,
    circumference: 38025,
    temp: {
        day: 430,
        night: -173
    },
    distance: 10820000,
    orbitalPeriod: 225,
    desc: 'Venus har ...',
    moons: []
}