
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('cash-out-input')
    const pinNumber = getInputFieldValueById('cash-out-pin-input')
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance') 
        
        const newBalance = balance - cashOut
        
        document.getElementById('account-balance').innerText = newBalance;
        
        
    }
    else{
        alert('Wrong pin, Do not cash out');
        
    }
    

})