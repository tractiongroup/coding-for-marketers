// Esercizio 6: Analisi Avanzata delle Vendite per Regione
// Dobbiamo analizzare le vendite per regione, calcolare metriche
// e trovare le regioni che superano determinati obiettivi

const salesByRegion = [
    { region: 'Nord', sales: [1200, 900, 1500, 800], target: 1000 },
    { region: 'Centro', sales: [950, 850, 1100, 750], target: 900 },
    { region: 'Sud', sales: [800, 700, 900, 600], target: 800 }
];

// Funzione per calcolare la media delle vendite
const calculateAverage = (sales) => {
    // TODO
};

// Funzione per determinare se una regione ha performance superiore al target
const isOverPerforming = (average, target) => average > target;

// Analisi completa delle regioni
const analyzeRegions = (data) => {
  // TODO
};

const analysisResults = analyzeRegions(salesByRegion);
console.log('Risultati analisi per regione:', analysisResults);

// Trovare le regioni che hanno superato il target
const successfulRegions = analysisResults.filter(region => region.overTarget);
console.log('Regioni sopra target:', successfulRegions);
