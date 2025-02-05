// Esercizio per casa 2: Calcolo Revenue Totale
// Calcolare il totale delle vendite per un determinato periodo
// utilizzando il metodo reduce

const salesData = [
    { product: 'Corso Marketing', price: 99, quantity: 5 },
    { product: 'Consulenza', price: 150, quantity: 3 },
    { product: 'Ebook', price: 29, quantity: 10 },
    { product: 'Workshop', price: 199, quantity: 2 }
];

// Calcolare il revenue totale (prezzo * quantità)
const totalRevenue = salesData.reduce((acc, sale) => {
    return acc + (sale.price * sale.quantity);
}, 0);

console.log('Revenue Totale:', totalRevenue);
