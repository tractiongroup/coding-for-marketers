// Dati forniti
let campagnaAttiva = {
    nome: "Summer Sale",
    metriche: {
        giorni: ["Lun", "Mar", "Mer", "Gio", "Ven"],
        cpc: [0.4, 0.45, 0.8, 0.9, 1.0],
        ctr: [2.1, 2.0, 1.8, 1.5, 1.2],
        conversioni: [20, 18, 15, 10, 8]
    }
};

/* Compiti:
1. Implementare controlli utilizzando cicli e condizioni per identificare:
   - Trend negativo nel CTR (3 giorni consecutivi in calo)
   - Aumento del CPC superiore al 50% rispetto al primo giorno
   - Calo delle conversioni superiore al 30% rispetto alla media dei primi 2 giorni

2. Per ogni problema identificato, creare un oggetto "alert" che contenga:
   - Tipo di problema
   - Gravità (alta/media/bassa)
   - Metriche rilevanti
   - Giorno di rilevamento

3. Utilizzare switch per determinare azioni consigliate in base al tipo di alert

4. Creare un report riassuntivo degli alert generati
*/
