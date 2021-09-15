const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button-click");
const messageError = document.querySelector("#error-message");
const returnMessage = document.querySelector("#return-message");
const notesTable = document.querySelectorAll(".no-of-notes-table");
const notesArray = [2000, 500, 100, 20, 10, 5, 1]

function onButtonClick(){
    let billAmountNum=Number(billAmount.value)
    let cashGivenNum=Number(cashGiven.value)
    hideMessage()
    if(billAmountNum > 0){
        if(cashGivenNum >= billAmountNum){
            var amountToBeReturned = cashGivenNum - billAmountNum;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Insuffient amount");
       }

    }else{
        showMessage("Enter a valid value");
    }

}

function calculateChange(amount){
    returnMessage.innerHTML=`Return amount : ${amount}`
for(let i=0; i< notesArray.length;i++){
    var noOfNotes = Math.trunc( amount / notesArray[i]);
    amount = amount % notesArray[i];
    notesTable[i].innerHTML = noOfNotes;
}
}

function showMessage(message){
    messageError.innerHTML=message;
    messageError.style.display="block"
}

function hideMessage(){
    messageError.style.display="none"
}

checkButton.addEventListener("click",onButtonClick)

