
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    console.log('cash out button cheak');

    showSectionById('add-money-form')
})


document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    showSectionById('cash-out-form')
})

document.getElementById('btn-transaction').addEventListener('click', function(){
    showSectionById('transaction-form')
})