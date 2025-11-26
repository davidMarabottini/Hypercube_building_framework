# Metriche standard HBF

Hypercube Building Framework (HBF) è un framework **agnostico ed estendibile**, pensato come **layer diagnostico**. Non sostituisce altri framework o processi, ma fornisce uno strumento per osservare e valutare l'equilibrio dei processi attraverso metriche standardizzate.

Questa flessibilità richiede attenzione nella definizione delle metriche: il framework lascia al team la responsabilità di aggiungere o adattare metriche e pratiche supplementari.

In questo file sono elencate alcune **metriche standard** che potrebbero essere usate, suddivise per area.

---

## Area Development

### 1. Precisione della stima

**Formula:**   effort_reale / effort_stimato

**Peso:** 1 (fisso)  

**Descrizione:**  
La metrica misura quanto il lavoro stimato corrisponde al lavoro effettivamente svolto.

In fase di review, i reviewer forniscono una valutazione il più oggettiva possibile, la media delle valutazioni viene considerata come valore effettivo.

**Calcolo in retrospettiva:**   
Formula finale:  
effort_reale * 1 / effort_stimato


**Prerequisiti / Note:**  
- Necessario un parametro aggiuntivo
- Necessario un meccanismo di pull request / code review.
- Suggerito almeno 2 reviewer per ottenere una media significativa.
- Considera solo le storie con valori per effort reale ed effort stimato.   

---

### 2. Unit test su storie da testare

**Formula:** (test == 1) / (test != null)

**Peso:** 1 (fisso)  

**Descrizione:**  
Indica la copertura di unit test sulle storie che richiedono test.  

**Parametri:**  
- `test = null`: storia non richiede unit test  
- `test = 0`: test richiesto ma assente  
- `test = 1`: test richiesto e presente  

**Calcolo in retrospettiva:**  
- Formula finale:  

(test == 1) * 1 / (test != null)

**Prerequisiti / Note:**  
- Necessario un parametro aggiuntivo
- Considera solo storie con `test != null`.  

---

### 3. Documentazione

**Formula:** (documentazione == 1) / (documentazione != null)


**Peso:** 1 (fisso)  

**Descrizione:**  
Valuta se le storie richiedono documentazione e se questa è presente.

**Parametri:**  
- `documentazione = null`: documentazione non richiesta  
- `documentazione = 0`: richiesta ma mancante  
- `documentazione = 1`: richiesta e presente  

**Calcolo in retrospettiva:**  
(documentazione == 1) * 1 / (documentazione != null)

**Prerequisiti / Note:**  
- Necessario un parametro aggiuntivo
- Considera solo storie con `documentazione != null`.  

---

### 4. Percentuale di fix su sviluppi

**Formula:** nr_fix / (nr_fix + nr_feat)

**Peso:** Variabile (deciso dal business)  

**Descrizione:**  
Indica la proporzione tra correzioni di bug e nuove feature implementate.

**Calcolo in retrospettiva:**  

nr_fix * peso / (nr_fix + nr_feat)


**Prerequisiti / Note:**  
- Necessaria distinzione tra storie di fix e storie di feature.  
- Il peso può essere adattato in base alle scelte strategiche del team.

---

## Area Business

### 1. ROI proporzionale

**Formula:** (guadagno - investimento) / investimento oppure roi / 100

**Peso:** 1  

**Descrizione:**  
Misura il ritorno sull'investimento in modo proporzionale.  

**Calcolo in retrospettiva:** (guadagno - investimento) * 1 / investimento oppure roi * 1 / 100


**Prerequisiti / Note:**  
- Da discutere in retrospettiva con il team.  
- Richiede dati affidabili su guadagni e investimenti.
