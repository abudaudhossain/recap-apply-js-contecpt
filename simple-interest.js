/*
A = P (1 + rt)
I = P (1 + rt) - P
A	=	final amount
P	=	initial principal balance
r	=	annual interest rate
t	=	time (in years) 
I   =   interest
*/

function getInterest (principal_balence, interest_rate, time) {
    let interest ;
    interest = (principal_balence *(1 + interest_rate * time)) - principal_balence;
    return interest;
}

let principal_balence = 24789;
let interest_rate = 5/100;
let time = 1;
let myInterest;

myInterest = getInterest(principal_balence, interest_rate, time);

console.log(myInterest);