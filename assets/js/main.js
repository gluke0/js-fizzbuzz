/* 
stampare in console i numeri da 1 a 100
    numeri multipli di 3 -> Fizz
        if (n % 3 == 0)
    numeri multipli di 5 -> Buzz
        if (n % 5 == 0)
    numeri multipli di 3 e 5 -> FizzBuzz
        if (n % 3 == 0 && n % 5 == 0)
*/


for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}


