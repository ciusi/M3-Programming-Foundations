//inizio definendo oggetti/utenti e lista prezzi 
const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = paul//cambia il valore qui per provare se il tuo algoritmo funziona!
  
  let sommaCarrello = 0
  //
  //Proseguo verificando se l'utente che effettua l'acquisto è Ambassador. 
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    sommaCarrello = (sommaCarrello * 30) / 100;
  }
  //Questa istruzione condizionale serve a verificare che l'utente che effettua l'acquisto isAmbassador.
  //utenteCheEffettuaLAcquisto.isAmbassador contiene un valore booleano, che può esserer true o false. 
  //Quando isAmbassador è TRUE per l'utente corrente, vuoldire che l'utente è ambassador e quindi si esegue ciò che è in if, ovvero sommaCarrello per 30 diviso 100

  if (sommaCarrello <= 100) {
    sommaCarrello += shippingCost;
  }
  //se la somma del carrello è minore di 100, invece, la SommaCarrello deve essere sommata a shippingCost
  //QUINDI: Se l'utente è un ambassador, il costo totale del carrello viene scontato del 30%.
  //          Se il costo totale del carrello è inferiore o uguale a 100, viene aggiunto il costo di spedizione.

  const iClienti = []
  iClienti.push(marco, paul, amy)
  console.log(iClienti)
  
  //adesso creo un array vuoto e con il metodo push aggiungo gli utenti. In questo modo, tuttiUtenti conterrà tutti gli utenti che acquistano. 
  
  for (let i = 0; i < iClienti.length; i++) {
    const cliente = iClienti[i]
    let stringaDaStampare = `${cliente.name} ${cliente.lastName} `
    if (!cliente.isAmbassador) {
      stringaDaStampare += "NON "
    }
    stringaDaStampare += "e' un ambassador"
    console.log(stringaDaStampare)
  }

  //anche qui creo un loop for per itereare su ogni utente dell'array iClienti. 
  //i è l'indice corrente che varia da zero a iClienti.lenght -1. 
  
  //In questo blocco di codice, stiamo eseguendo un loop for per iterare su ogni utente nell'array iClienti. 
  //Il loop for viene utilizzato per iterare attraverso ciascun utente nell'array tuttiUtenti. 
  //Il ciclo inizia con i impostato a 0 e continua finché i è minore della lunghezza dell'array iClienti. 
  //L'obiettivo è eseguire il codice all'interno del loop per ogni utente nell'array.
  //const cliente = iClienti[i] è una costante che serve a prendere il cliente corrente da iClienti e ad assegnargli "cliente"
  //in questo modo accedo ai dati del cliente nel loop in modo più facile. 
  //let stringaDaStampare, invece, serve a sommare il nome cliente con il cognome. 


  let soloGliAmbassador = []
  for (let i = 0; i < iClienti.length; i++) {
      const utente = iClienti[i];
      if(utente.isAmbassador) {
          soloGliAmbassador.push(utente)
      }
  }
  console.log(soloGliAmbassador);

  
