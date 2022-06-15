/*

>let's say, instead of popping up an alert dialog box, we rather
want to return a random number anywhere between 1 and 6, and 
be able to use or call the random number any time, any where.


We'll change a couple of things from the previous (index1.js)
code. Precisely, we will change the codes in lines 1 and 3.


Line3: We replace -->    alert(randomNumber); with return randomNumber;
...because we are no longer displaying an alert dialog box, but
now only intend to return the result and keep it in memory for 
when invoked on demand.


Line1: We replace --> function alertRandom() { 
    ...with --> function somethingElse() { 
    ...because we are no longer popping up an alert. We're now
    ...only storing random numbers in memory. 

    Actually a better name now, would be:
    function getRandomNumber() {


*/

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

 //Now we can still call an alert dialog as seen below:
// alert(getRandomNumber());

console.log(getRandomNumber());


