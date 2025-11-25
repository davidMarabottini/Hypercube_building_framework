# Hypercube Building Framework  
### Manifesto per una Crescita Bilanciata

L'**Hypercube Building Framework (HBF)** è un modello operativo progettato per rendere **visibile, interpretabile e misurabile l'equilibrio di un processo complesso**, con particolare attenzione allo sviluppo software ma applicabile a qualunque dominio.  
Lo fa attraverso:

- **metriche normalizzate**,  
- **visualizzazioni coerenti**,  
- **navigazione multilivello**,  
- **valutazioni retrospettive** del lavoro effettuato.

L'HBF **non sostituisce** framework Agili o evidence-based o modelli organizzativi esistenti, li **potenzia**, fornendo una rappresentazione delle dinamiche interne del sistema.

---

## Obiettivi del framework

Il framework permette di:
- Individuare squilibri tra dimensioni del processo.
- Favorire discussioni basate su dati, non percezioni.
- Offrire una navigazione coerente e continua tra livelli diversi del lavoro.
- Misurare l'equilibrio del sistema con metodi stabili e non manipolabili.
- Scalare verso più domini (dev, business, ops…) senza perdere leggibilità.

HBF misura l'equilibrio del processo, non il valore generato o la performance delle persone.

---

## Fondamenti del framework

HBF si basa su metriche espresse come:
> Rapporto noralizzato, con valore ideale = 1

Il framework non impone metriche specifiche
Alcune delle metriche utilizzabili saranno definite in un file esterno che descrive:
* Cosa misura una metrica
* Come si calcola
* A quale dominio appartiene
* In quali contesti è raccomandata, opzionale o obbligatoria
* Se richiede un flusso particolare per essere calcolata

Questo rende il framework agnostico, modulare e configurabile ma fornisce al tempo stesso delle specifiche minime che possono fungere da bussola per un team

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

-----------------------------ARRIVATO QUI-----------------------

## Dashboard del Framework

HBF utilizza una singola vista composta da due elementi complementari:

### 1. Radar Chart – La mappa
Il radar rappresenta sempre la mappa delle metriche attive per il dominio e il livello selezionato.

Ogni asse mostra quanto una dimensione è vicina o lontana dal'’equilibrio.

Il radar non cambia pagina:
rimane sempre visibile e aggiornato.


### 2. Diagrammi a Blocchi – Il dettaglio

Quando l'utente seleziona una metrica sul radar:

* il Block Chart mostra la decomposizione locale
* ogni blocco rappresenta l'equilibrio di un elemento a livello immediatamente successivo a quello mostrato dal radar
* l'altezza del blocco è il valore della metrica
* una linea a quota 1 rappresenta l'equilibrio ideale

### Navigazione Gerarchica

La struttura è configurabile. Esempio:

- **Prodotto**  
  -> **Epica**  
  -> **Storia**  
  -> **Task**

La navigazione è semplice e uniforme ad ogni livello.

esempio:

1. Entri sulla dashboard a livello di prodotto -> vedi il radar chart
2. Clicchi sulla metrica che vuoi esplorare -> si apre il diagramma a blocchi che mostra la metrica per ogni epica
3. Al click sul blocco il radar chart mostrerà gli equilibri di ogni metrica a livello di epica mentre il diagramma a blocchi mostrerà l'equilirbio a livello di task
4. Al click su un altra metrica a livello di radar chart i blocchi visualizzeranno gli equilibri rispetto all'altra metrica
5. al click su una freccia il sistema potrà navigare a livello superiore

---

## Scaled HBF - ipercubi multipli per domini multipli

Il framework HBF as is presenta problemi di scalabilità e può essere dispersivo quando le metriche diventano troppe, per questo vale l'indicazione di tenere un numero di metriche basso.
Se ci fosse una struttura complessa e ci fosse la necessità di aumentare il numero di metriche, il framework va scalato.
Per questo nasce **Scaled HBF**

Scaled HBF non si basa più sulla generazione di un ortotopo a livello singolo. Permette piuttosto di creare più iperrettangoli divisi in aree funzionali.
Un esempio potrebbe essere:
**Development**
* Effort_reale/effort_stimato
* Storie_unit_test/storie_necessitano_unit_test
* Storie_documentate/storie_necessitano_documentazion
* Bug_fix*correttivo/(bug_fix+feat)

**Business**
* Impatto_atteso/impatto_reale
* ROI(visto come proporzione)
* Giorni_previsti/giorni_reali

Ogni iperrettangolo è:
* Indipendente
* Configurabile tramite metriche di dominio
* Leggibile e navigabile tramite la stessa logica
* Presenta un modo standardizzato per mostrare l'equilibrio

### Risultato:
Ogni ruolo rimane focalizzato solo su ciò che serve, possono essere fatte analisi solo su un elemento, riducendo il rumore esterno

### Navigazione tra ipercubi (scaled mode)
Prima di accedere ai dati della propria area di competenza, l'utente dovrà avere la possibilità di scegliere l'area, poi si troverà di fronte alla stessa dashboard presentata in precedenza, con la differenza che dovrà avere la visibilità dell'area in cui si trova e la possibilità di cambiarla in modo rapido

---

## Cosa non fa e cosa fa EBF

HBF:

- non diagnostica le cause alla radice  
- non prescrive soluzioni operative,  
- non valuta individui.

Mostra **dove guardare**. Il *perché* e il *come migliorare* emergono da:

- retrospettive,  
- analisi focali,  
- revisioni di processo.

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

In questa sezione voglio spiegare la metafora che ha dato origine al nome e il ragionamento che vi sta dietro.

* Ogni metrica può essere vista come una dimensione all'interno di un iperpiano

**HBF ci fornisce uno strumento per trasformare le nostre metriche in lati di un ortotopo e visualizzare i lati e come ciò si distribuisce a livello più basso**

* I valori delle metriche diventano automaticamente i lati dell'ortotropo stesso
* Il grafico a radar mostra il valore di tutti i lati dell'ortotopo assieme a livello corrente, e da la possibilità di vedere quale lato ispezionare
* Il grafico a blocchi mostra la scomposizione dell'ortotopo a livello successivo e da la possibilità di scegliere quale componente visualizzare
* Scaled HBF si basa sulla creazione di diversi ipercubi paralleli, uno per ogni dominio.

> *Nota*
> La metafora geometrica cerca di dare coerenza, estetica e stabilità matematica al sistema, inoltre, dato che una forma geometrica multidimensionale è traducibile in una matrice, potrebbe essere possibile ipotizzare visualizzazioni più matematiche e meccanismi di analisi anche più avanzate
