const transactionData = []


// functions to get input values 
function getInputValueNumber(id){
  const inputField =  document.getElementById(id)
  const inputFieldValue = inputField.value
  const inputFieldValueNumber = parseInt(inputFieldValue)
  return inputFieldValueNumber;
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue;
}
// fuction to get innerTexr 

function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText 
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to set innerText (some problem cause don't understand)

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value

}

// function to toggle 

function handleToggle(id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

// funtion to toggle button 
function handleButtonToggle(id){
   const formBtn =document.getElementsByClassName('form-btn')

   for(const btn of formBtn){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
      btn.classList.add('border-gray-300')
   }
   document.getElementById(id).classList.remove('border-gray-300')
   document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

}



// add money feature 
document.getElementById('add-money-btn').addEventListener('click', function (e){
    e.preventDefault();
    const validPin = 1234;
   const bank = document.getElementById('bank').value;
   const accountNumber = getInputValue('account-number')
   const amount = getInputValueNumber('add-amount')
   if(amount <= 0){
    alert('invalid amount')
    return;
}

   const pinNumber = getInputValueNumber('add-pin')

   
   const availableBalance = getInnerText('available-balance')
   console.log(pinNumber, availableBalance)

if(accountNumber.length< 11){
    alert('please provide valid account number')
    return;
}
if(pinNumber !== validPin ){
    alert('please provide valid pin number')
    return;
}

alert('your amount added succesfully')
   const totalAvailableBalance = amount + availableBalance;

   setInnerText(totalAvailableBalance);


const data = {
    name: 'Add money',
    date: new Date (). toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)

})


// cash out feature 
document.getElementById('withdraw-btn').addEventListener('click', function(e){
e.preventDefault();

const amount = parseInt(document.getElementById('withdraw-amount').value)



if(amount <= 0 ){
    alert ('Invalid amount')
    return;
}

const agentNumber = document.getElementById('agent-number').value

const withdrawPinNumber = getInputValueNumber('withdraw-pin-number')

const validPinNumber = 1234;

if(agentNumber.length< 11){
    alert('please provide valid account number')
    return;
}
if(withdrawPinNumber !== validPinNumber ){
    alert('please provide valid pin number')
    return;
}


const availableBalance = parseInt( document.getElementById('available-balance').innerText)

if(amount > availableBalance ){
    alert ('Invalid amount')
    return;
}

 const totalAvailableBalance = availableBalance - amount

setInnerText(totalAvailableBalance)

const data = {
    name: 'Cash Out',
    date: new Date (). toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)



// document.getElementById('available-balance').innerText = totalAvailableBalance

})


document.getElementById('transaction-btn').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-white rounded-xl p-3 mt-3">
        <div class="bg-white rounded-xl p-3 flex items-center">
        <div class=" rounded-full p-3 bg-[#f4f5f7]">
            <img src="assets/wallet1.png" alt="" class="mx-auto">
        </div>
        <div class="ml-3">
            <h1 class="font-semibold text-[#5a5a5a]">${data.name}</h1>
            <p class="text-[#5a5a5a]">${data.date}</p>
        </div>
    </div>
<div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
</div>
</div>
        `

        transactionContainer.appendChild(div)
    }
    
})





// toggling feature 
document.getElementById('add-btn').addEventListener('click', function(){
   handleToggle('add-money-parent')
handleButtonToggle('add-btn')


//    const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//       btn.classList.add('border-gray-300')
//    }
//    document.getElementById('add-btn').classList.remove('border-gray-300')
//    document.getElementById('add-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')


    //   const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('add-money-parent').style.display = 'block'


    // document.getElementById('cash-out-parent').style.display = "none"
    // document.getElementById('add-money-parent').style.display = "block"
    // document.getElementById
    // ('transfer-money-parent').style.display = 'none'
    })

document.getElementById('cash-out-btn').addEventListener('click', function(){
     handleToggle('cash-out-parent')
     handleButtonToggle('cash-out-btn')

//         const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//     btn.classList.add('border-gray-300')
//    }
//    document.getElementById('cash-out-btn').classList.remove('border-gray-300')
//    document.getElementById('cash-out-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')


    //       const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('cash-out-parent').style.display = 'block'


    // document.getElementById('add-money-parent').style.display = "none"
    // document.getElementById('cash-out-parent').style.display = "block"
    // document.getElementById
    // ('transfer-money-parent').style.display = 'none'
})

document.getElementById('transfer-btn').addEventListener('click', function(){
handleToggle('transfer-money-parent')

handleButtonToggle('transfer-btn')

// const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//       btn.classList.add('border-gray-300')
//    }
//    document.getElementById('transfer-btn').classList.remove('border-gray-300')
//    document.getElementById('transfer-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

    //       const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('transfer-money-parent').style.display = 'block'


    // document.getElementById
    // ('add-money-parent').style.display = "none"
    // document.getElementById
    // ('cash-out-parent').style.display = "none"
    // document.getElementById
    // ('transfer-money-parent').style.display = 'block'
})
document.getElementById('get-bonus-btn').addEventListener('click', function(){

     handleToggle('get-bonus-parent')
     handleButtonToggle('get-bonus-btn')

//      const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//       btn.classList.add('border-gray-300')
//    }
//    document.getElementById('get-bonus-btn').classList.remove('border-gray-300')
//    document.getElementById('get-bonus-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

    //       const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('get-bonus-parent').style.display = 'block'
    //
     })


document.getElementById('pay-bill-btn').addEventListener('click', function(){
      handleToggle('pay-bill-parent')

      handleButtonToggle('pay-bill-btn')

//            const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//       btn.classList.add('border-gray-300')
//    }
//    document.getElementById('pay-bill-btn').classList.remove('border-gray-300')
//    document.getElementById('pay-bill-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

    //       const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('pay-bill-parent').style.display = 'block'
    // 
    })


document.getElementById('transaction-btn').addEventListener('click', function(){

    handleToggle('transaction-parent')

    handleButtonToggle('transaction-btn')

//                const formBtn =document.getElementsByClassName('form-btn')

//    for(const btn of formBtn){
//     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
//       btn.classList.add('border-gray-300')
//    }
//    document.getElementById('transaction-btn').classList.remove('border-gray-300')
//    document.getElementById('transaction-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

    

    //       const forms = document.getElementsByClassName('form')

    //   for(const form of forms){
    //     form.style.display = 'none'
    //   }
    //   document.getElementById('transaction-parent').style.display = 'block'
    // 
    })


