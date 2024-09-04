// Oppgave 1 

// function navneformattering() { 
//     let fornavn = prompt("Skriv ditt fornavn:")         // Spør brukeren om å skrive inn fornavn
//     let etternavn = prompt("Skriv ditt etternavn")      // Spør brukeren om å skrive inn etternavn

//     fornavn = fornavn.substring(0,1).toUpperCase() +    // Gjør førstebokstaven i fornavnet til storbokstav
//     fornavn.substring(1).toLowerCase();                 // Gjør resten av bokstavene i fornavnet til småbokstaver

//     etternavn = etternavn.substring(0,1).toUpperCase() +    // Gjør førstebokstaven i etternavnet til storbokstav
//     etternavn.substring(1).toLowerCase();                   // Gjør resten av bokstavene i etternavnet til småbokstaver

//     return (`${fornavn} ${etternavn}`)                  // Returnerer fornavnet og etternavnet som ble skrevet

// }

// document.write(navneformattering());                    // Printer "navneformateringen" og skriver det på siden


// Oppgave 2 

// function telleord() {
//     let setning = prompt("Skriv en setning:");             // Spør brukeren om å skrive inn en setning
//     let ordListe = setning.split(" ");                     // Deler setningen opp i ord ved split() 
//     let antallOrd = ordListe.length;                       // Teller antall ord i setningen
    
//     return (`Antall ord i setningen er: ${antallOrd}`);    // Returnerer antall ord i setningen
// }

// document.write(telleord());                               // Printer resultatet


// Oppgave 3

// function replaceWord() {
//     let setning = prompt("Skriv en setning:");                   // Spør brukeren om å skrive inn en setning
    
//     let nySetning = "";                                          // Initialiserer en tom string for den nye setningen

//     for (let i = 0; i < setning.length; i++) {                   // Ser igjennom bokstavene
//         let bokstav = setning.slice(i, i + 1);                   // Henter en bokstav om gangen ved hjelp av slice()
        
//         nySetning += bokstav.replace('a', '@');                  // Erstatter a med @ hvis det finnes, og legger til i nySetning
//     }

//     return (`Den nye setningen med @ er: ${nySetning}`);         // Returnerer den nye setningen
// }

// document.write(replaceWord());                                   // Printer resultatet og skriver det på siden


// Oppgave 4

// function lengsteOrd() {
//     var word = prompt("Skriv en setning:");                      // Får brukeren til å skrive en setning
//     var str = word.split(" ");                                   // Deler setningen opp i ord 
//     var longest = 0;                                             // Starter variabelen 

//     str.forEach(function(str) {
//         if (longest < str.length) {                              // Sjekker skjekker ordene for hvilket som er lengst
//             longest = str.length;                                // Endrer svar hvis koden finner et lengre ord
//             word = str;                                          // Endrer til det ordet som er lengst
//         }
//     });

//     return word;                                                 // Returnerer det lengste ordet funnet
// }

// document.write("Det lengste ordet er: " + lengsteOrd() + ".");   // Skriver det lengste ordet

// Utfordringer: 

// Utfordring 1: 


