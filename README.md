# Hypercube Building Framework  
### Manifesto per una Crescita Bilanciata

L'**Hypercube Building Framework (HBF)** è un modello operativo progettato per rendere **visibile, interpretabile e misurabile l'equilibrio del processo di sviluppo software**.  
Lo fa attraverso:

- **metriche normalizzate**,  
- **visualizzazioni coerenti**,  
- **navigazione multilivello**,  
- **valutazioni retrospettive** del lavoro effettuato.

L'HBF **non sostituisce** framework Agili o evidence-based (Scrum, Kanban, EBM):  
li **integra**, fornendo un layer aggiuntivo di trasparenza: *una fotografia continua dello sforzo reale*, osservabile dal livello prodotto fino al singolo task.

---

## Obiettivi

- Evidenziare squilibri nello sforzo, nella qualità, nel flusso e nella distribuzione del lavoro, o in qualunque area misurabile come rapporto tra 2 kpi.  
- Favorire discussioni basate su dati, non percezioni.  
- Offrire navigazione coerente dai livelli macro (prodotto) ai livelli micro (task).  
- Supportare il miglioramento continuo tramite metriche stabili, semplici e intuitive.

L'HBF misura **l'equilibrio del processo**, non l'impatto sul business.  
Le metriche di outcome possono essere integrate come layer aggiuntivo.

---

## Parametri Obbligatori

### Effort Reale (ER)

Per ogni elemento di lavoro (storia, task, item):

- **Effort Teorico (ET)** = stima iniziale della storia definita dal team.  
- **Effort Reale (ER)** = valutazione retrospettiva della complessità realmente incontrata.  
- L'ER viene valutato in maniera indipendente da ogni revisore **durante la code review**, il suo valore sarà dato dalla media delle valutazioni.  
- Non misura il tempo e non valuta persone.  
- Rappresenta la complessità affrontata, non la precisione della stima.

> Questo parametro è indispensabile: senza ER il framework non può funzionare.

---

## Metrica Base (obbligatoria)

### **ER / ET**  
*(Effort Reale / Effort Teorico)*  
**Peso fisso = 1**

- Valore ideale = **1**  
- > 1 -> complessità inattesa, impedimenti, gap nel DoD  
- < 1 -> sovrastima o semplificazione emergente  

Questa metrica è la **dimensione principale dell'equilibrio**.

---

## Metriche Aggiuntive (Configurabili)

Il team può aggiungere ulteriori KPI: bugfix, manutenzione, sicurezza, flusso, refactoring, ecc.  

Tutte le metriche aggiuntive devono:

- essere opzionali,  
- avere pesi configurabili,  
- rimanere stabili nel tempo per preservare la leggibilità storica,  
- essere normalizzate affinché il valore ideale sia **1**.

---

## Valori Fondamentali del Framework

### **1. Equilibrio**
Il comportamento ideale tende a 1.  
Deviazioni evidenziano squilibri tra dimensioni del processo.

### **2. Trasparenza**
I dati non misurano persone o performance individuali.  
Riduce incentivi al “gaming” e mantiene il focus sul processo.

### **3. Stabilità**
Pesi e KPI non cambiano durante il lavoro attivo.  
Le variazioni avvengono solo in momenti dedicati (es. retrospettiva o momento dedicato) e sono discussi dall'intero team.

### **4. Adattabilità**
Il framework si adatta a qualsiasi flusso o gerarchia.  
Struttura e KPI sono definiti dal team.

---

## Dashboard del Framework

L'HBF propone una dashboard con **due viste principali**.

---

### 1. Radar Chart – Vista Macro (Livello Prodotto)

- Mostra **il rapporto tra le due dimensioni analizzate nei kpi**.  
- Permette di identificare rapidamente le dimensioni più in squilibrio tra loro, su cui concentrarsi.

**Interazione:**  
👉 *Click su un asse* -> apre il diagramma a blocchi corrispondente a quella dimensione e aggiorna il radar per le altre dimensioni del livello inferiore.

---

### 2. Diagrammi a Blocchi – Vista Micro (Drill-Down)

Appare a livello Epica -> Storia -> Task.

Ogni blocco contiene:

- **altezza** = numeratore * peso della metrica (es. ER * peso)  
- **larghezza** = denominatore della metrica (es. ET)  
- **rapporto altezza/larghezza** indica lo squilibrio della dimensione  
- il blocco ideale è un quadrato

**Interazione:**  
👉 *Click sul blocco* -> drill-down al livello inferiore  
👉 il radar viene aggiornato per le altre dimensioni di quel livello

Questa logica rimane identica a ogni livello, riducendo il carico cognitivo.

---

## Navigazione Gerarchica

La struttura è configurabile. Esempio:

- **Prodotto**  
  -> **Epica**  
  -> **Storia**  
  -> **Task**

Ogni livello mostra una proiezione locale dell'ipercubo, coerente con la dashboard macro.

---

## Miglioramento Continuo

L'HBF:

- non diagnostica cause radice,  
- non prescrive soluzioni operative,  
- non valuta individui.

Mostra **dove guardare**. Il *perché* e il *come migliorare* emergono da:

- retrospettive,  
- analisi focali,  
- revisioni di processo.

---

## Cosa il Framework NON è

- Non è un metodo di stima alternativa.  
- Non predice valore di business o outcome.  
- Non misura performance individuali.  
- Non sostituisce processi esistenti.  
- Non identifica problemi strutturali automaticamente.

È un **layer operativo di consapevolezza**, non un processo.

---

# Conclusione

L'HBF combina:

- stabilità metrica,  
- visualizzazioni intuitive,  
- navigazione multilivello coerente,  
- rigore nella normalizzazione.

Rende l'equilibrio **visibile**, guidando il miglioramento direttamente dal team.

---

# Appendice — Fondamento Geometrico (Facoltativo)

L'HBF modella lo stato di salute del processo di sviluppo come un **Ortòtopo** (un rettangolo multidimensionale).

* Ogni **metrica normalizzata** (il rapporto tra due KPI moltiplicato per il peso) è trattata come un **lato** di questo Ortòtopo.
* L'obiettivo è la convergenza verso l'**Ipercubo**, la forma geometrica ideale dove tutti i lati hanno lunghezza 1 (l'equilibrio perfetto).

La visualizzazione diagnostica si articola su due livelli funzionali:

1.  **Radar Chart (Vista Macro):** Rappresenta i **lati** dell'Ortòtopo. Mostra la **lunghezza finale** di tutti i lati in relazione a 1, evidenziando immediatamente la dimensione del processo più deforme.
2.  **Diagramma a Blocchi (Vista Micro):** Rappresenta la **faccia 2D** che forma quel lato. Visualizza il rapporto tra le due dimensioni (Numeratore e Denominatore, con il peso applicato) che hanno determinato la lunghezza del lato, fornendo la causa esatta dello squilibrio.

Questa logica garantisce che il *layer* di visualizzazione sia perfettamente coerente con la fondazione geometrica, pur mantenendo la navigazione intuitiva.

> **Nota:**
> Non è necessario comprendere l'ipercubo per utilizzare il framework.  
> La metafora serve a mantenere eleganza e stabilità matematica, ma l'uso pratico richiede solo la lettura delle dashboard e dei diagrammi.

