function rollDie() {
    const dice = document.getElementById("onTheDie");
    var numberOfSides = document.getElementById("numberOfSides").value
    if (isNaN(numberOfSides)) {
        alert('Must be number')
    }
    else {
        let result = Math.ceil(Math.random() * numberOfSides);
        dice.innerHTML = result;
        console.log(numberOfSides + " sided die rolled lands on " + result);
    }
}