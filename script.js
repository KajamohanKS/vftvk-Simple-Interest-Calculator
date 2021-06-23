/**
 * Kajamohan.K
 * Simple Interest Calculator
 * JavaScript File
 */

// Display the Rate value
function showRate() {
    var printRateVal = document.getElementById("rateVal");
    var disRate = '<b><i>' + document.getElementById("rate").value + '%<\/i><\/b>';
    printRateVal.innerHTML = disRate;
}

// Calculate and Display the Interest Value
function calInterest() {
    setResults();
    var rate = document.getElementById("rate").value;
    var amount = document.getElementById("principal").value;
    var years = document.getElementById("years").value;

    var interest = parseFloat(rate) * parseFloat(amount) * parseFloat(years) / 100;

    var finalYear = new Date().getFullYear() + parseInt(years);

    var op = "Your Deposit : <mark> " + amount + " <\/mark>" +
        "<br>Interest Rate : <mark> " + rate + "% <\/mark>" +
        "<br>Interest You will recive an Amount : <mark> " + parseInt(interest) + " <\/mark>" +
        "<br>in the Year : <mark> " + finalYear + " <\/mark>";

    if (checkValue()) {
        document.getElementById("result").innerHTML = op;

    } else {
        document.getElementById("result").innerHTML= "Check the Value!!!!<br>Enter a Positive Number";
    }
}

// Check the Rate, Principal and No.of Years is Valid or Not
function checkValue() {
    var rate = document.getElementById("rate").value;
    var amount = document.getElementById("principal").value;
    var years = document.getElementById("years").value;

    if (rate > 0 && amount > 0 && years > 0) {
        return true;
    } else {            // input Values are lessthan Zero or not Numbers
        return false;
    }
}

// Reset the Rate, Principal and No.of Years value to Zero
function resetAll() {
    document.getElementById("rate").value ="" ;
    document.getElementById("principal").value ="" ;
    document.getElementById("years").value ="" ;
    showRate();
    var res = document.getElementById("result");
    res.removeAttribute("class");
    res.innerHTML = "";
}

// Display the Result usig add class Attribute
function setResults() {
    var res = document.getElementById("result");
    res.setAttribute("class", "resultShow");
}
