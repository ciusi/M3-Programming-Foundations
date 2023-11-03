const user = {
    name: "Silvia",
    annoDiNascita: 1998
}
if (user.annoDiNascita < 2005) {
console.log("l'utente è maggiorenne")
}else{
    console.log("l'utente è minorenne")
}

if(user.annoDiNascita < 2007) {
    console.log("Può avere il foglio rosa in america")
} else if (user.annoDiNascita < 2005) {
    console.log("l'utente può avere un arma in america")
} else if (user.annoDiNascita < 2001) {
    console.log("utente può acquistare alcol in america")
}

switch(user.annoDiNascita){
case 2007: 
    console.log("14 anni"); 
    break;
case 2001: 
    console.log("22 anni"); 
    break;
case 2005: 
    console.log("18 anni");
    break;
}

const admin = {
    nome: "Lidia", 
    role: "admin"
}

const utente = {
    nome: "Silvia", 
    role: "student"
}

switch(admin.role){// variabile da controllare
    case "admin": // se il valore === admin
    console.log("utente è admin")
    break;
    case"student":
    console.log("utente è student")
    break;
}

//simile a if(admin.role === "admin"){
//    console.log("l'utente è admin")
// } else if(admin.role === "student"){
// console.log("utente è student")
//}
var giorno = "";

switch (giorno) {
  case "lunedì":
    console.log("Oggi è lunedì.");
    break;
  case "martedì":
    console.log("Oggi è martedì.");
    break;
  case "mercoledì":
    console.log("Oggi è mercoledì.");
    break;
  default:
    console.log("Oggi non so che giorno sia.");
}