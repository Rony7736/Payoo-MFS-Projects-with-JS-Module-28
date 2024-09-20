
/*
    Common Shared Function here

*/
// repeatation komanor jonno

// ei function sudu matro akta kaj (input field) eita call korar jonno

// function getInputFieldValueById (){
//     console.log('we will get the value');
    
//     const addMoney = document.getElementById('add-money-input').value
//     return addMoney
// }

//...................................................................................


// eita sudu input field na onno gulor jonno pete chai
// uporer kaj tai id parameter niye kora

function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value
    const inputValueNumber = Number(inputValue)
    return inputValueNumber
}

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText
    const textValueNumber = Number(textValue)
    return textValueNumber
}

function showSectionById (id){

    // hide all the sectioh
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-form').classList.add('hidden')

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden')
}