// step-1 : click the deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    
    //  step-2: get the deposit input value from input field
    const depositElement = document.getElementById('deposit-feild');
    const depositElementString = depositElement.value;
    const newDepositAmount = parseFloat(depositElementString);

    // clear the input field
    depositElement.value =' ';

    // warning for invalid input
    if(isNaN(newDepositAmount)){
        alert('Please provide valid number');
        return;
    }

    // step-3 : set the input value into the deposit card
    const preDepositAmount = document.getElementById('deposit-total');
    const preDepositAmountString = preDepositAmount.innerText ;
    const preDepositeTotal = parseFloat(preDepositAmountString);

    // step-4: summation of new amount and previouse ammound into the current deposit field

    const currentDeposit = preDepositeTotal + newDepositAmount;
    preDepositAmount.innerText = currentDeposit;

    // step-5: set current deposit into the balance card

    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountString = balanceAmount.innerText ;
    const preBalanceAmount = parseFloat(balanceAmountString);

    // stept -6: summation of previouse balance and current balance
    const currentBalance = preBalanceAmount + newDepositAmount ;
    balanceAmount.innerText = currentBalance;



    
})