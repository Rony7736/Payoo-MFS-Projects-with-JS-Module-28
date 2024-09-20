
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('cash-out-input')
    const pinNumber = getInputFieldValueById('cash-out-pin-input')
    
    if(isNaN(cashOut)){
        alert('Failed to Cash Out')
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance') 

        if(balance < cashOut){
            alert('You do not have sufficient Balance')
            return;
        }
        
        const newBalance = balance - cashOut
        
        document.getElementById('account-balance').innerText = newBalance;
        
          // add to transaction history

          const div = document.createElement('div')
          div.classList.add('bg-red-300')
          div.innerHTML = `
            <h4 class= "text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdrow. New Balance ${newBalance}</p>
          `

          document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('Wrong pin, Do not cash out');
    }
    

})