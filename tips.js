//Calculate Tip
function calculateTip() {
    var totalAmt = document.getElementById('totalamt').value;
    var Qual = document.getElementById('Qual').value;
    var numOfPeople = document.getElementById('peopleamt').value;

    //validate input
    if (totalAmt === "" || Qual == 0) {
        alert("Please enter values");
        return;
    }

    //Check to see if this input is empty or less than or equl to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1; 
        document.getElementById("each").style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    //Calculate Tip
    var total = (totalAmt * Qual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;

    }

    //Hide the tip amount on load
    document.getElementById('totalTip').style.display = 'none';
    document.getElementById('each').style.display = 'none';

    //Click to call function
    document.getElementById("calculate").onclick =
    function() {
        calculateTip();
    };