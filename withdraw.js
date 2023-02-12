// step-1: click the withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){

    // step-2: get the input value from input field
    const withdrawElement = document.getElementById('withdraw-feild');
    const withdrawElementString = withdrawElement.value ;
    const newWithdrawAmount = parseFloat(withdrawElementString);
    

    // clear input field 
    withdrawElement.value ='';

    // warning for wrong input
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide valid number');
        return;
    }

    // step-3: set the new wintdraw into previous withdraw card
    const preWithdrawAmount = document.getElementById('withdraw-total');
    const preWithdrawAmountString = preWithdrawAmount.innerText ;
    const preWithdrawTotal = parseFloat(preWithdrawAmountString);

     // step-5: get the previouse balance

     const balanceAmount = document.getElementById('balance-total');
     const balanceAmountString = balanceAmount.innerText;
     const preBalanceAmount = parseFloat(balanceAmountString);


    // step-7: warning if you have enough monery for withraw 
    
    if(newWithdrawAmount>preBalanceAmount){
        alert('You have not enough money');
        return;
    }

    // step-4 : summation of previouse and new withdraw
    const currentWithAmount = preWithdrawTotal + newWithdrawAmount;
    preWithdrawAmount.innerText = currentWithAmount;



    // step-6: substract new balance from previous balance
    const currentBalance = preBalanceAmount - newWithdrawAmount;
    balanceAmount.innerText = currentBalance ;




})