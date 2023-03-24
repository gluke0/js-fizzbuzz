/* 
stampare in console i numeri da 1 a 100
    numeri multipli di 3 -> Fizz
        if (n % 3 == 0)
    numeri multipli di 5 -> Buzz
        if (n % 5 == 0)
    numeri multipli di 3 e 5 -> FizzBuzz
        if (n % 3 == 0 && n % 5 == 0)
*/

let container = document.querySelector(`.package`);

for (let i = 1; i <= 100; i++){
    let box = document.createElement(`div`);
    box.classList.add(`box`)
    container.append(box);

    if (i % 3 == 0 && i % 5 == 0){
        box.classList.add("fizzbuzz")
        box.append(`FizzBuzz`);
    } else if (i % 5 == 0){
        box.classList.add("buzz")
        box.append("Buzz")
    } else if (i % 3 == 0){
        box.classList.add("fizz")
        box.append("Fizz")
    } else {
        box.append(i)
    }
    
};
  


