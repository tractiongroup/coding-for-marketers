// Dati forniti
let budgetTotale = 5000;
let piattaforme = {
    facebook: { nome: "Facebook Ads", cpc: 0.5, conversioni: 150 },
    instagram: { nome: "Instagram Ads", cpc: 0.6, conversioni: 120 },
    google: { nome: "Google Ads", cpc: 0.8, conversioni: 200 }
};

/* Compiti:
1. Utilizzare Object.keys() e Object.values() per analizzare le performance

2. Per ogni piattaforma calcolare un "punteggio efficienza":
   - Più conversioni = punteggio più alto
   - CPC più basso = punteggio più alto
   
3. Utilizzare un ciclo while per distribuire il budget:
   - Allocare più budget alle piattaforme con punteggio più alto
   - Continuare finché tutto il budget non è stato allocato
   
4. Creare un report che mostri:
   - Budget allocato per ogni piattaforma
   - Previsione conversioni basata sul CPC e budget allocato
*/
