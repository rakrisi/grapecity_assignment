function calculateTip() {
    var bill = document.getElementById("billValue").value;
    var service = document.getElementById("tipValue").value;
    var people = document.getElementById("peopleValue").value;
    if ( bill<0 ) {
        document.getElementById("billValue").value=0.00;
        alert("Please enter a valid bill amount.");
        return;
    }
    
    else if ( service < 0 ) {
        document.getElementById("tipValue").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    
    else if ( people < 1 ) {
        document.getElementById("peopleValue").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    var tip = bill * (service / 100.0)/ people;
    var tota = (bill / people) + tip;
    document.getElementById("tip").innerHTML ="₹"+ tip.toFixed(2);
    document.getElementById("total").innerHTML ="₹"+ tota.toFixed(2);
}
function decreaseTip() {
    var tip = document.getElementById("tipValue").value;
    if ( tip < 1 ) {
        document.getElementById("tipValue").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    var people = document.getElementById("peopleValue").value;
    if ( people < 1 ) {
        document.getElementById("peopleValue").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    tip = tip * 1 - 1;
    document.getElementById("tipValue").value = tip;
    calculateTip();
}

function increaseTip() {
    var tip = document.getElementById("tipValue").value;
    if ( tip < 0 ) {
        document.getElementById("tipValue").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    var people = document.getElementById("peopleValue").value;
    if ( people < 1 ) {
        document.getElementById("peopleValue").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    tip = tip * 1 + 1;
    document.getElementById("tipValue").value = tip;
    calculateTip();
}

function decreasePeoples() {
    var people = document.getElementById("peopleValue").value;
    if ( people < 2 ) {
        document.getElementById("peopleValue").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    var tip = document.getElementById("tipValue").value;
    if ( tip < 0 ) {
        document.getElementById("tipValue").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    people = people * 1 - 1;
    document.getElementById("peopleValue").value = people;
    calculateTip();
}

function increasePeoples() {
    var people = document.getElementById("peopleValue").value;
    if ( people < 1 ) {
        document.getElementById("peopleValue").value=1;
        alert("Please enter a valid number of people.");
        return;
    }
    var tip = document.getElementById("tipValue").value;
    if ( tip < 0 ) {
        document.getElementById("tipValue").value=0;
        alert("Please enter a valid tip percentage.");
        return;
    }
    people = people * 1 + 1;
    document.getElementById("peopleValue").value = people;
    calculateTip();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tipPlus").addEventListener("click", decreaseTip);
    document.getElementById("tipMinus").addEventListener("click", increaseTip);
    document.getElementById("peoplePlus").addEventListener("click", decreasePeoples);
    document.getElementById("peopleMinus").addEventListener("click", increasePeoples);
    document.getElementById("billValue").addEventListener("keyup", calculateTip);
    document.getElementById("tipValue").addEventListener("keyup", calculateTip);
    document.getElementById("peopleValue").addEventListener("keyup", calculateTip);
}); 
