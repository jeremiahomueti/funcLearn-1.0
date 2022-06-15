function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

//We can even store the function in a variable that we can use later.

const dieRoll = getRandomNumber();

console.log(dieRoll);
