PROBLEMA
focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
MILESTONE 1 
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
****
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
MILESTONE 2
Aggiungere il ciclo infinito del carosello.** Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

SOLUZIONE

1-Creo array 
2-Recupero elemento dal dom che contiene i dati e le immagini 
3-Avvio il ciclo dell'array per creare le card con le immagini
4-Definisco l'elemento che voglio che sia inizialmente visibile. 
5- Recupero tutti gli elementi che hanno la classe card.
6- Seleziono l'elemento da rimuovere e gli tolgo la classe d-none. 
7- Recupero il pulsante dal dom. 
8- Genero il pulsante e lo lascio in attesa dell'evento click.
9-Attivo la condizione che mi faccia apparire l'ultima immagine al click della prima icona e viceversa.
10- Mostro il risultato finale.