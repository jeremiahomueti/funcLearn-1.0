function alertRandom() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();

/*

The "ReferenceError: alert is not defined" occurs when the 
alert() method is used outside of the browser environment, 
most commonly in Node. js. 
The alert method is a method on the window object, which is 
only available in the browser. 
To solve the "alert is not defined" error, use the console.

*/