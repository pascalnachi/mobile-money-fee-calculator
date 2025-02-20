document.getElementById('feeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const network = document.getElementById('network').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('result');

    if (!network || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount and select a network.";
        resultDiv.style.color = "red";
        resultDiv.style.display = "block";
        return;
    }

    let fee = 0;

    if (network === "orange") {
        if (amount <= 5) fee = amount * 0.18;
        else if (amount <= 10) fee = amount * 0.0876;
        else if (amount <= 20) fee = amount * 0.0553;
        else if (amount <= 50) fee = amount * 0.028;
        else if (amount <= 100) fee = amount * 0.0177;
        else if (amount <= 400) fee = amount * 0.016;
        else if (amount <= 2500) fee = amount * 0.0095;
        else fee ="Enter an amount less than 2500";
        
    } else if (network === "mpesa") {
        if (amount <= 5) fee = amount * 0.17;
        else if (amount <= 1000) fee = amount * 0.012;
        else if (amount <= 2500) fee = amount * 0.01;
        else fee = "Enter an amount less than 2500";
    }    else if (network === "airtel") {
        if (amount <= 10) fee = amount * 0.085;
        else if (amount <= 20) fee = amount * 0.058;
        else if (amount <= 50) fee = amount * 0.0295;
        else if (amount <= 400) fee = amount * 0.0175;
        else if (amount <= 2500) fee = amount * 0.01;
        else fee = "Enter an amount less than 2500";
    }
        else {
        fee = "Enter an amount less than 2500";
    }

    resultDiv.textContent = `Withdrawal Fee: ${typeof fee === 'number' ? '$' + fee.toFixed(2) : fee}`;
    resultDiv.style.color = "#333";
    resultDiv.style.display = "block";
});
