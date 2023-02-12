document.getElementById('login-button').addEventListener('click',function(){
    const userId = document.getElementById('user-id');
    const userIdValue = userId.value;
    console.log(userIdValue);

    const userPass = document.getElementById('user-pass');
    const userPassValue = userPass.value;
    console.log(userPassValue);

    if(userIdValue === 'nildari@mail.com' && userPassValue === 'nildari'){
        window.location.href = 'bank.html' ;
    }
    else{
        alert('Provide valid mail password');
    }


})