# Hypercube Building Framework  
### Manifesto per una Crescita Bilanciata

L'**Hypercube Building Framework (HBF)** è un modello operativo progettato per rendere **visibile, interpretabile e misurabile l'equilibrio di un processo complesso**, con particolare attenzione allo sviluppo software ma applicabile a qualunque dominio.  
Lo fa attraverso:

- **metriche normalizzate**,  
- **visualizzazioni coerenti**,  
- **navigazione multilivello**,  
- **valutazioni retrospettive** del lavoro effettuato.

L'HBF **non sostituisce** framework Agili o modelli organizzativi esistenti, li **potenzia**, fornendo una rappresentazione delle dinamiche interne del sistema.

---

## Obiettivi del framework

HBF permette di:
- Individuare squilibri tra dimensioni del processo.
- Favorire discussioni basate su dati, non percezioni.
- Offrire una navigazione coerente e continua tra livelli diversi del lavoro.
- Misurare l'equilibrio del sistema con metodi stabili e non manipolabili.
- Scalare verso più domini (dev, business, ops…) senza perdere leggibilità.

HBF misura l'equilibrio del processo, non il valore generato o la performance delle persone.

---

## Fondamenti del framework

HBF si basa su metriche espresse come **rapporto**, alle quali viene moltiplicato un **peso** per normalizzare la metrica sempre a 1.

- La **normalizzazione** rende tutte le metriche confrontabili e permette di vedere chiaramente gli squilibri
- Il **peso** è definito dagli obiettivi che il team intende raggiungere.
Esempio: vogliamo che durante lo sprint, il team dedichi 1/3 del lavoro ai bugs.
* Potremmo considerare la metrica sp_fix/(sp_fix+sp_feat)
* Poi applicare un peso pari a 3 per portare la metrica a 1 ad obiettivo raggiunto

Il framework non impone metriche specifiche

**Nota**: Alcune metriche plausibili sono indicate nel file di [metriche aggiuntive](./additive_metrics.md)

Questo rende il framework **agnostico, modulare e configurabile** ma fornisce al tempo stesso delle specifiche minime che possono fungere da bussola per un team

---

## Valori Fondamentali del Framework

### **1. Equilibrio**
Ogni dimensione dovrebbe tendere a 1.  
Deviazioni evidenziano squilibri da indagare, non colpe

### **2. Trasparenza**
Metriche, valori e parametri devono essere impostate in modo trasparente.
Il framework osserva fenomeni del processo, non singole persone.
I dati impostati dal team e l'interpretazione dei risultati devono essere fatti con responsabilità e trasparenza, per il bene del team e del progetto, e non per vantaggi del singolo

### **3. Stabilità**
Una volta configurate, metriche e pesi non cambiano durante il lavoro attivo.
Eventuali modifiche avvengono in momenti controllati (retrospettive, revisioni periodiche) e sono discussi dall'intero team.
Il tempo speso per l'eventuale riallineamento di metriche e pesi deve un momento timeboxed di durata proporzionale alla lunghezza dello sprint, sarà scopo dello sprint capire quanto tempo dedicarvi.

### **4. Adattabilità**
Qualunque metrica ratio normalizzata può essere integrata.
Qualunque struttura gerarchica può essere navigata.

---

## Dashboard del Framework

HBF utilizza una singola vista unica e chiara tramite 2 strumenti principali:

### 1. Radar Chart – La mappa
* Mostra tutte le metriche attive per il dominio e livello selezionato
* Ogni asse indica quanto la dimensione è vicina all'equilibrio (valore = 1)
* Rimane sempre visibile e aggiornato

### 2. Diagrammi a bastoncini – Il dettaglio

Quando l'utente seleziona una metrica sul radar:

* Mostra la decomposizione delle metriche selezionate
* Ogni bastoncino rappresenta un elemento a livello inferiore
* Altezza = valore della metrica, linea = equilibrio ideale (1)

### Navigazione Gerarchica
* La navigazione è semplice e uniforme ad ogni livello.
* La struttura gerarchica delle storie è definita dal team.

Ma per fare un esempio ci basiamo sulla seguente struttura: 
**Prodotto** -> **Epica** -> **Storia** -> **Task**

[Prototipo in figma](https://www.figma.com/proto/fARhEGDA5fL4OYTZMjnUqg/Untitled?node-id=17-427&t=empgUhbajgpucSai-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A427)

Esempio:

1. Entri sulla dashboard a livello di prodotto -> vedi il radar chart
2. Clicchi sulla metrica che vuoi esplorare -> si apre il diagramma a bastoncino che mostra la metrica per ogni epica
3. Al click sul bastoncino il radar chart mostrerà gli equilibri di ogni metrica a livello di epica mentre il diagramma a bastoncino mostrerà l'equilirbio a livello di task
4. Al click su un altra metrica a livello di radar chart i bastoncini visualizzeranno gli equilibri rispetto all'altra metrica
5. al click su una freccia il sistema potrà navigare a livello superiore

---

## Scaled HBF - blocchi multipli per domini multipli

**HBF** è un sistema semplice e potente, che permette di visualizzare l'equilibrio di un team in modo coerente, nascondendo la complessità di un modello matematico avanzato (che vedremo più avanti) di cui non è necessario conoscere i dettagli per l'applicazione base del framework.

Al crescere della complessità del nostro blocco, però, il sistema ha limiti di scalabilità e può risultare dispersivo. Per questo nasce **Scaled HBF**.

L'idea è di creare un sistema basato su blocchi radici indipendenti, ognuno corrispondente ad un area funzionale, con non più di 6 metriche, ad esempio:
**Development**
* Effort_reale/effort_stimato
* Storie_unit_test/storie_necessitano_unit_test
* Storie_documentate/storie_necessitano_documentazion
* Bug_fix*correttivo/(bug_fix+feat)

**Business**
* Impatto_atteso/impatto_reale
* ROI(visto come proporzione)
* Giorni_previsti/giorni_reali

In questo esempio avremo un blocco radice **development** a 4 dimensioni e uno **business** a 3 dimensioni

Ogni blocco radice è:
* Indipendente e configurabile
* Leggibile e navigabile con la stessa logica
* Standardizzato per mostrare l'equilibrio

### Risultato:
Ogni ruolo rimane focalizzato solo su ciò che serve, riducendo il rumore esterno

### Navigazione tra blocchi radici e blocchi (scaled mode)
La navigazione della dashboard sarà simile a quella di hypercube base, con la differenza che sarà possibile scegliere il blocco che si vuole esplorare e sarà sempre presente la possibilità di cambiare blocco in modo semplice

---

## Cosa non fa e cosa fa EBF

HBF:

- non diagnostica le cause
- non prescrive soluzioni
- non valuta individui.

Mostra **dove guardare**. Il *perché* e il *come migliorare* emergono da:

- retrospettive
- analisi focali
- revisioni di processo

---

## Cosa il Framework NON è

- Non è un metodo di stima alternativa.  
- Non predice valore di business.  
- Non misura performance individuali.  
- Non sostituisce processi esistenti.  
- Non identifica problemi strutturali automaticamente.

HBF è un sistema di osservazione degli equilibri del team, mostra dove guardare, non cosa fare

---

# Conclusione

Hypercube Building Framework offre:

- una vista unica chiara (radar + blocchi)
- navigazione ricorsiva e intuitiva
- modularità totale delle metriche
- scalabilità tramite ipercubi multipli
- stabilità nel tempo
- aderenza rigorosa alla normalizzazione

È una piattaforma per rendere l'equilibrio visibile, scalabile e comprensibile, trasformando i dati del processo in uno spazio navigabile e trasparente.

---

# Appendice — Fondamento Geometrico (Facoltativo)

HBF sta per Hypercube Building Framework, il nome può sembrare quantomeno complesso.

In questa sezione voglio spiegare la metafora che ha dato origine al nome e la matematica che vi sta dietro:

* Ogni metrica può essere vista come una dimensione all'interno di un iperpiano
* I blocchi radice sono matematicamente rappresentati da iperrettangoli dove ogni lato è rappresentato dal valore di una specifica metrica
* Il sistema è in equilibrio quando l'iperrettangolo tende ad un ipercubo di lato 1
* L'ispezione dei lati dell'iperrettangolo avviene tramite il grafico a radar, mentre il grafico a bastoncini mostra come le componenti a livello successivo influenzano la lunghezza di un lato specifico

HBF quindi ci fornisce:
* Uno strumento per costruire iperrettangoli in uno spazio cartesiano multidimensionale
* Una dashboard capace di ispezionare l'iperrettangolo e mostrarci cosa diverge dal nostro ideale di perfezione

Inoltre scaled HBF ci permette di creare vari iperrettangoli più semplici, ognuno dedicato ad un area specifica del team.

Deve inoltre essere possibile visualizzare la matrice di qualunque iperrettangolo a qualsiasi livello per permettere analisi più avanzate:

* Estrapolazione di autovalori e autovettori per evidenziare combinazioni lineari particolarmente critiche
* Studio di eventuali direzioni di salita o discesa tramite il gradiente
* Distanza del sistema dall'ideale

> *Nota*
> La metafora geometrica cerca di dare coerenza, estetica e stabilità matematica al sistema, inoltre, dato che una forma geometrica multidimensionale è traducibile in una matrice, potrebbe essere possibile ipotizzare visualizzazioni più matematiche e meccanismi di analisi anche più avanzate
