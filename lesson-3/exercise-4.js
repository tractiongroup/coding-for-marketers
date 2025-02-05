// Esercizio per casa 3: Verifica Obiettivi Marketing
// Verificare se tutti i canali marketing hanno raggiunto 
// l'obiettivo minimo di conversione

const marketingChannels = [
    { channel: 'Email', conversionRate: 2.8 },
    { channel: 'Social', conversionRate: 3.2 },
    { channel: 'Blog', conversionRate: 3.5 },
    { channel: 'Ads', conversionRate: 2.9 }
];

// Verificare se tutti i canali hanno un tasso di conversione > 2.5%
const allChannelsPerforming = marketingChannels.every(
    channel => channel.conversionRate > 2.5
);

console.log('Tutti i canali sopra obiettivo:', allChannelsPerforming);
