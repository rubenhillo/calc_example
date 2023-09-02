function compute()
{
    var principal = document.getElementById("principal").value;//to calculate final amount
    var rate = document.getElementById("rate").value;//to calculate the interest amount
    var years = document.getElementById("years").value;//to calculate the interest amount
    var interest = principal * years * rate / 100;//to calculate the total amount
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");//needed to modify text when the compute button pressed
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus(); //method for prinicpal input validation
    }else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}