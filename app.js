var initialAmount = document.querySelector("#initial-amt")
var quantity = document.querySelector("#quantity")
var currentAmount = document.querySelector("#current-amt")
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")
var message = ""

function calProfitAndLoss(initial,quantity,current)
{

    if( initial < current)
    {
        var profit = (current - initial)*quantity;
        var profitPercent = (profit/current)*100
        message = "Hey there is loss of" + profit + " and a loss percent of " + profitPercent
        showMessage(message)
        
    }
    else if(initial > current)
    {
        var loss = (initial - current) * quantity
        var lossPercent = (loss/initial)*100
        message = "Hey there is loss of" + loss +" and a loss percent of " + lossPercent
        showMessage(message)
    }
    else{
        message = "This is neither Loss or Profit"
        showMessage(message)
    }

}

function showMessage(message)
{
    output.innerText = message
}

function clickHandler()
{
  calProfitAndLoss(initialAmount.value,quantity.value,currentAmount.value)
}

checkBtn.addEventListener('click',clickHandler)
