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
    const visitScore = lead.pageVisits * 10;
    const resourceScore = lead.downloadedResources * 20;
    const webinarScore = lead.webinarAttendance ? 50 : 0;
    
    return visitScore + resourceScore + webinarScore;
};

// Funzione per classificare il lead based sul punteggio
const classifyLead = (score) => {
    if (score >= 100) return 'Hot';
    if (score >= 50) return 'Warm';
    return 'Cold';
};

// Analisi completa dei lead
const analyzedLeads = marketingLeads.map(lead => {
    const score = calculateEngagementScore(lead);
    return {
        ...lead,
        score: score,
        classification: classifyLead(score)
    };
});

// Trovare i lead più promettenti (Hot)
const hotLeads = analyzedLeads.filter(lead => lead.classification === 'Hot');

console.log('Analisi completa dei lead:', analyzedLeads);
console.log('Lead più promettenti:', hotLeads);

// Verificare se abbiamo almeno un lead "Hot"
const hasHotLeads = analyzedLeads.some(lead => lead.classification === 'Hot');
console.log('Abbiamo lead promettenti:', hasHotLeads);
