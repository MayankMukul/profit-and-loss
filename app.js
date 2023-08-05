var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocks = document.querySelector("#stocks");
var btn = document.querySelector("#btn");
var message = document.querySelector(".output");

function calculateProfit(costPrice,sellingPrice,qty){
    var profit = (sellingPrice - costPrice)*qty ;
    var profitPercent = ((profit/costPrice)*100).toFixed(2);
    message.innerHTML=`<span style="color:green" > Profit = ${profit} Profit % = ${profitPercent} `;
}

function calculateLoss(costPrice,sellingPrice,qty){
    var loss= (costPrice - sellingPrice)*qty;
    var lossPercent = ((loss/costPrice)*100).toFixed(2);
    message.innerHTML=`<span style=" color:red" > Loss = ${loss} Loss % = ${lossPercent} `;
}

function equal(){
    message.innerHTML=`No Profit and No Loss`;
 }

function clickHandler(){
    var costPrice = initialPrice.value;
    var sellingPrice = currentPrice.value;
    var qty = stocks.value;
    if (costPrice !== '' && sellingPrice !== '' && qty !== '' ){
        if(sellingPrice>costPrice){
            calculateProfit(costPrice,sellingPrice,qty);
        } else if (sellingPrice<costPrice){
            calculateLoss(costPrice,sellingPrice,qty);
        } else if (sellingPrice==costPrice){
             equal();
        }
    } else {
        message.innerHTML=('<span style=" color:red" > *Please fill out all fields');
    }
   
}

btn.addEventListener("click",clickHandler);