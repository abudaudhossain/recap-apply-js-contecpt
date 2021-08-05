function celciusToFarenheit(celcius) {
    let farenheit;

    // formula (celcius °C × 9/5) + 32 = farenheit °F
    farenheit = (celcius * ( 9 / 5 )) + 32;

    return farenheit;
}

let mycelcius = 36;
let getFarenheit = celciusToFarenheit(mycelcius);

console.log(getFarenheit);