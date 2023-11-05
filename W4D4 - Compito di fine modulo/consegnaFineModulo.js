const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ];
  
  // 1. Inizio definendo la funzione per la ricerca del lavoro. Al suo interno inserisco un array vuoto dove, con il loop, faccio rientrare
  // le ricerche che corrispondono ai criteri. Nell'altra variabile, raccolgo il numero di ricerche pertinenti.
  
  function ricercaLavoroCitta(title, location) {
    console.log("Valore originale di lavoro:", title);
    console.log("Valore originale di citta:", location);
  
    title = title.toLowerCase();
    location = location.toLowerCase();
  
    const risultatiPertinenti = [];
    let numeroRisultati = 0;
    
  
    console.log("valore lavoro in minuscolo:", title);
    console.log("valore citta in minuscolo:", location);

  //2. Per rendere la ricerca case insensitive trasformo i parametri lavoro e città in minuscolo con .toLowerCase

    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      const jobTitle = job.title.toLowerCase();
      const jobLocation = job.location.toLowerCase();

  //3. Creo un ciclo per iterare i valori dell'array jobs però sempre case insensitive.
  // in pratica const job = jobs[i] estrae dall'array e assegna a "job". prende l'elemento corrente i e lo assegna a job. Idem per location.   
  // Però lo devo fare sommando di uno volta per volta e quindi metto ++. 

      if (jobTitle.includes(title) && jobLocation.includes(location)) {
        risultatiPertinenti.push(job);
        numeroRisultati++;
      }
    }

    // 4. Controllo se jobTitle e jobLocation includono i valori creati. Se la condizione è vera, pusho i due risultait e li aggiungo all'array e alla variabile creati prima. 
    // l'unica cosa è che non mi funziona se metto || anzichè &&. 
    // Volevo fare in modo che l'utente trovasse risultati affini e non netti. Quindi questa funziona solo se jobTitle e JobLocation corrispondono. 

    
    return {
      result: risultatiPertinenti,
      count: numeroRisultati,
    };
  
    // 5. Ritorno i valori che contengono i risultatiPertinenti e il numeroRisultati. Così ricercaLavoroCitta trova gli annunci di lavoro che coincidono per title e location. 
  
  }
  
  
  const risultati = ricercaLavoroCitta("Developer", "US, NY");
  console.log("Risultati della ricerca:", risultati);
  
  const risultati2 = ricercaLavoroCitta("Marketing Intern", "US, NY, New York");
  console.log("Risultati della ricerca:", risultati2)
  
  
 //________________________________________________________________________________________

 const cercaButton = document.getElementById("buttonCerca");
cercaButton.addEventListener("click", function () {
  const titoloLavorativo = document.getElementById("inputTitolo").value;
  const posizioneGeografica = document.getElementById("inputLocation").value;

  const risultatiRicerca = ricercaLavoroCitta(titoloLavorativo, posizioneGeografica);

  const risultatiDiv = document.getElementById("risultati");
  risultatiDiv.innerHTML = ""; // Pulisci i risultati precedenti

  if (risultatiRicerca.count === 0) {
    risultatiDiv.textContent = "Nessun risultato trovato.";
  } else {
    // Mostra i risultati in una lista 
    let listaRisultatiHTML = "<ul>";

    for (let i = 0; i < risultatiRicerca.result.length; i++) {
      const risultato = risultatiRicerca.result[i];
      listaRisultatiHTML += `<li>${risultato.title} - ${risultato.location}</li>`;
    }

    listaRisultatiHTML += "</ul>";

    risultatiDiv.innerHTML = listaRisultatiHTML;
  }
});