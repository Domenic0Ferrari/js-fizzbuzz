/*
Scrivi un programma che stampi in console i numeri da 1 a 100;
Per i multipli di 3 stampi “Fizz” al posto del numero; 
Per i multipli di 5 stampi “Buzz” al posto del numero;
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*
Per sapere se un numero è divisibile per un altro usare '%'
*/

const eleGrid = document.querySelector('.grid');
let Fizz = 'fizz'
let Buzz = 'buzz'
let FizzBuzz = 'fizzbuzz'

for (let i = 1; i <= 100; i++) {
    if (i % 15== 0){
       console.log(FizzBuzz);
       eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-15">${FizzBuzz}</div>`
    } 
    else if (i % 3 == 0){
        console.log(Fizz);
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-3">${Fizz}</div>`
    } 
    else if (i % 5 == 0){
        console.log(Buzz);
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-5">${Buzz}</div>`
    } 
    else{
       console.log(i);
       eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    }
}