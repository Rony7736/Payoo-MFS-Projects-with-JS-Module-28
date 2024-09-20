/*
    How to get a number from an input field 

    1. create a varriable 
    2. right side document.getElementById('ID')
    3. .value 
    4. parseFloat/ parseint / Number (best way)
*/
// console.log('add money loaded');

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add money button clicked');

    // const addMoney = document.getElementById('add-money-input').value
    // const addMoneyNumber = Number(addMoney)
    // console.log(addMoneyNumber);

    // --------------------------------------------------------------------

    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById();
    // console.log('from add money' ,addMoney);
    
    // ---------------------------------------------------------------------

    // eibar parameter niye same kaj

    const addMoney = getInputFieldValueById('add-money-input')
    const pinNumber = getInputFieldValueById('pin-input')
    // console.log('add money with parameter', addMoney, pinNumber);
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance')
       
        const newBalance = balance + addMoney
        
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p);
        
        // single vabe korle eita tobe transaction er kaj funtion add kore korte hoy
        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('Failed to add Money')
    }
    
})