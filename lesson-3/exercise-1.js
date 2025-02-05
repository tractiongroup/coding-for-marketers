// Esercizio in classe: Analisi delle Campagne Marketing
// Abbiamo un array di campagne pubblicitarie con il loro budget e ROI.
// Dobbiamo trovare tutte le campagne che hanno generato un ROI superiore al 200%

const campaigns = [
    { name: 'Facebook Ads Q1', budget: 1000, roi: 250 },
    { name: 'Google Ads Q1', budget: 1500, roi: 180 },
    { name: 'Instagram Q1', budget: 800, roi: 320 },
    { name: 'LinkedIn Q1', budget: 2000, roi: 90 }
];

// Utilizzare il metodo filter per trovare le campagne con ROI > 200%
const successfulCampaigns = campaigns.filter(campaign => campaign.roi > 200);

console.log('Campagne di successo:', successfulCampaigns);
