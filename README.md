# Milestone 0
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.
- Inizializzo il progetto con vue + vite
- Creo file store.js
- Importo reactive da vue
- Creo oggetto con vari endpoint che voglio utilizzare

# Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

- Creo delle componenti Header e Main
- Nell'Header, creo un campo input e un button per la ricerca di un film
- Creo una direttiva v-model alla quale associo una variabile stringa vuota contenuta in store.js
- Invio una richiesta all'App.vue passando come parametro la stringa inserita dall'utente
- In App.vue, eseguo la chiamata axios e popolo l'array vuoto, creato in store, con gli oggetti corrispondenti alla richiesta dell'utente
- Creo la props per passare l'array al Main, dove popolo le ul con i dati richiesti

# Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

- Installo il pacchetto flag icons
- Creo in Main.vue una funzione con uno switch per modificare il valore delle classi in base alla lingua originale
- Tramite binding, modifico le classi dell'icona per la bandiera

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

- Creo sottocomponenti per la visualizzazione rispettivamente dei film e delle serie e le importo nel Main.vue
- Nello store, creo un nuovo array vuoto che conterrà le serie cercate dall'utente
- In App.vue, eseguo una richiesta axios e salvo i risultati nel nuovo array
    - Invio tramite props a Main.vue il nuovo array
- In Main.vue creo due cicli, uno per i film e l'altro per le serie, nei tag delle componenti figlie
    - Tramite props, passo l'elemento cliccato ai figli
- In TV e in MOVIE sposto le mie funzioni per visualizzare le bandiere e aggiungo le liste richieste

# Milestone 3:
Aggiungiamo la copertina del film o della serie al nostro elenco.

- Aggiungo una funzione getPoster a functions.js
    - Richiamo l'endpoint per il recupero delle immagini, aggiungo la dimensione e infine il path
    - Chiamo le funzioni nei methods di Tv.vue e Movie.vue, usandoli in una li contenente l'immagine corrispettiva al film / alla serie TV

Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome). Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene

- Creo una funzione in functions.js per convertire il voto in quinti (e arrotondato all'intero più vicino con Math.round())
- Chiamo la funzione in Tv.vue e Movie.vue
- Creo due cicli per le stelle piene e le stelle vuote in base al rating del film / dello show TV

# Milestone 4:

Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
● Un header che contiene logo e search bar
● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio
la poster_path con w342)
● Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview

# WHAT I LEARNT TODAY

- (1) window è l'oggetto globale del browser. Effettuando una stampa su console tramite console.log() ho potuto recuperare le proprietà di scrolling. Su https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY ho letto che scrollY e scrollX restituiscono un numero in px indicante quanto il documento viene fatto scorrere, rispettivamente, verticalmente e orizzontalmente (quindi così ho la distanza tra la parte superiore della finestra del browser e la parte superiore della viewport corrente).
Aggiungendo come condizione del toggle (vedi punto 2) window.scrollY > 0, ho potuto aggiungere una transizione al momento dello scrolling, tentando di emulare il sito di Netflix.

- (2) toggle() può avere 2 parametri: la classe da aggiungere/rimuovere e il booleano: se true aggiuge, se false rimuove. Quindi:
    - element.classList.toggle("class_name", boolean_condition)
Nel mio caso, ho voluto cambiare la classe dell'header in basee alla posizione dello scroll: come se avessi scritto:
    if (window.scrollY > 0) { header.classList.add("scrolled")}
    else { header.classList.remove("scrolled")}