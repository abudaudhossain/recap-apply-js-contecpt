/*80 - 100   A+
70 - 79    A
60 - 69    A-
50 - 59    B
40 - 49    C    
33 - 39    D    
0 - 32     F
*/

function getGrad(mraks) {
    if(mraks >= 80) {
        return 'A+';
    }else if(mraks >= 70) {
        return 'A';
    }else if(mraks >= 60) {
        return 'A-';
    }else if(mraks >= 50) {
        return 'B';
    }else if(mraks >= 40) {
        return 'C';
    }else if(mraks >= 33) {
        return 'D';
    }else{
        return 'F';
    }
}

let myMraks = 36;
let MyGrad = getGrad(myMraks);

console.log(MyGrad);
