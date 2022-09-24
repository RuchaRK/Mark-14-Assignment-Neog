var initialAmount = document.querySelector("#initial-amt")
var quantity = document.querySelector("#quantity")
var currentAmount = document.querySelector("#current-amt")
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")
var message = ""
var flag = 0

function calProfitAndLoss(initial,quantity,current)
{
    console.log(typeof(initial))
    console.log(quantity)
    console.log(current)

    if(initial < current)
    {
        console.log("in first if")
        var profit = (current - initial)*quantity;
        var profitPercent = (profit/current)*100
        var flag = 0
        message = "Hey there is profit of " + profit.toFixed(2) + " and a profit percent of " + profitPercent.toFixed(2)
        showMessage(message,flag)   
    }   
    else if(initial > current)
    {
        var loss = (initial - current) * quantity
        var lossPercent = (loss/initial)*100
        var flag = 1
        message = "Hey there is loss of " + loss.toFixed(2) + " and a loss percent of " + lossPercent.toFixed(2)
        showMessage(message,flag)
    }
    else{
        var flag = 2
        message = "This is neither Loss or Profit"
        showMessage(message,flag)
    }

}

function showMessage(message,flag)
{
    if(flag === 0 ){
    output.innerText = message
    output.style.color = "#00B1D2"
}
    else if (flag === 1)
    {
        output.innerText = message
        output.style.color = "red"
        
    }
    else{
        output.innerText = message
        output.style.color = "purple"

    }
}

function clickHandler()
{
  calProfitAndLoss(Number(initialAmount.value),Number(quantity.value),Number(currentAmount.value))
}

checkBtn.addEventListener('click',clickHandler)
