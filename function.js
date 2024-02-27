
const account1 = {
    name : "Ethan Sharper",
    banknumber : "12345678",
    balance : 5000,
}

const account2 = {
    name :"Lily Sharper",
    banknumber : "987654",
    balance : 6000,
}

function WithDrawMoney(account,amount) {
    console.log(`Hello ${account . name}` );
    if(amount <=account. balance) {
        console.log("take your money");
    }else{
        console.warn("withdrawal amount not available");
    }
}
WithDrawMoney(account1,5500)
WithDrawMoney(account2,4500)


const account2 = {
    name :"Lily Sharper",
    banknumber : "987654",
    balance : 6000,
}

