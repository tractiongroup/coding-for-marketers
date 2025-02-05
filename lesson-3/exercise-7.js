// Esercizio 7: Sistema di Scoring Lead Marketing
// Sistema per valutare i lead basato su diversi criteri e
// identificare quelli più promettenti

const marketingLeads = [
    { id: 1, email: 'lead1@email.com', pageVisits: 5, downloadedResources: 2, webinarAttendance: true },
    { id: 2, email: 'lead2@email.com', pageVisits: 3, downloadedResources: 0, webinarAttendance: false },
    { id: 3, email: 'lead3@email.com', pageVisits: 8, downloadedResources: 3, webinarAttendance: true },
    { id: 4, email: 'lead4@email.com', pageVisits: 2, downloadedResources: 1, webinarAttendance: false }
];

// Funzione per calcolare il punteggio di engagement
const calculateEngagementScore = (lead) => {
  // TODO
};

// Funzione per classificare il lead based sul punteggio
const classifyLead = (score) => {
  // TODO
};

// Analisi completa dei lead
const analyzedLeads = marketingLeads.map(lead => {
  // TODO
});

// Trovare i lead più promettenti (Hot)
const hotLeads = analyzedLeads.filter(lead => lead.classification === 'Hot');

console.log('Analisi completa dei lead:', analyzedLeads);
console.log('Lead più promettenti:', hotLeads);

// Verificare se abbiamo almeno un lead "Hot"
const hasHotLeads = analyzedLeads.some(lead => lead.classification === 'Hot');
console.log('Abbiamo lead promettenti:', hasHotLeads);
