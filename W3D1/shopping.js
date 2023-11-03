const shoppingCart = [
    {
        id:1,
        nome: "patate",
        quantita: 23,
        price: 4
    },
    {
        id:2,
        nome: "pomodori" ,
        quantita: 2,
        price: 1
    },
    {
        id: 3,
        nome: "piadine",
        quantita: 5,
        price: 3
    },
    {
        id: 4,
        nome: "macinato",
        quantita: 1,
        price: 7
    },
];

for (let i=0; i < 10 ; i++) {
console.log(i) //stampa da 0 a 9
}


console.log(shoppingCart[shoppingCart.length - 1]) //lunghezza dell'array 4 - 1

for (let i=0; i< shoppingCart.length ; i++){
    console.log(shoppingCart[i].nome)
}