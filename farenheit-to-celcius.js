function farenheitToCelcius(farenheit) {
    let celcius;
    
    // formula (farenheit - 32) * 5/9 = celcicius;
    celcius = (farenheit - 32) * 5/9;

    return celcius;
}

let myFatenheit = 96.8;
let getCelcius = farenheitToCelcius (myFatenheit);

console.log(getCelcius);