//Note: Functions always return a value, even if you don't state a return statement. In such a scenario, the function returns 'undefined'.

function alertRandom() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    alert (randomNumber);
}

alertRandom();