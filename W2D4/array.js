let alfabeto = ["a", "b", "c", "d", "e"]
  //              0      1    2   3   4 
// voglio stampare a schermo la lettera "a"
console.log (alfabeto[0]) // stamperà la "a"
console.log(alfabeto[2]) // stamperà la "c"
let nomi = ["andrea", "andrea r", "andrea s", "angelo", "carlo", "catalin"]
//           0          1            2          3           4       5
// gli array hanno la proprietà .lenght, cioè stampare la lunghezza
console.log(alfabeto.length) // stamperà 5
console.log(nomi.length) // stampa 6
console.log(nomi[5]) // stampa catalin
console.log(nomi[6]) // stampa undefined
console.log(nomi[-1]) // stampa undefined 
console.log(nomi[nomi.length - 1]) //stampa xatalin
console.log("---------cambiare elemento di un array")
nomi[0] += " x"
nomi[1] = "silvia"
console.log(nomi)


//let students = [
  //  {name: "Paulina", note: 5},
   // {name: "Alex", note: 4},
    //{name: "Diana", note: 4}
//]
//console.log(students)

let matrix = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
]

console.log(matrix[0][0]) // a
console.log(matrix[0][1]) // b
console.log(matrix[0]) // a b c
console.log(matrix[0] || matrix[1] || matrix[2]) // abc
console.log(matrix[0] && matrix[1] && matrix[2]) // ghi 
 //se voglio stampare l'ultimo elemento dell'ultimo array
 console.log(matrix[matrix.length - 1][matrix.length - 1])
 