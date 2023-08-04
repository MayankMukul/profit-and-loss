var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocks = document.querySelector("#stocks");
var btn = document.querySelector("#btn");
var message = document.querySelector(".output");

function calculateProfit(costPrice,sellingPrice,qty){
    var profit = (sellingPrice - costPrice)*qty ;
    var profitPercent = (profit/costPrice)*100;
    message.innerHTML=`<span style="color:green" > profit = ${profit} profit%= ${profitPercent} `;
}

function calculateLoss(costPrice,sellingPrice,qty){
    var loss= (costPrice - sellingPrice)*qty;
    var lossPercent = (loss/costPrice)*100;
    message.innerHTML=`<span style=" color:red" > Loss = ${loss} Loss%= ${lossPercent} `;
}

function equal(){
    message.innerHTML=`No Profit and No Loss`;
 }

function clickHandler(){
    var costPrice = initialPrice.value;
    var sellingPrice = currentPrice.value;
    var qty = stocks.value;

    if(sellingPrice>costPrice){
        calculateProfit(costPrice,sellingPrice,qty);
    } else if (sellingPrice<costPrice){
        calculateLoss(costPrice,sellingPrice,qty);
    } else if (sellingPrice==costPrice){
         equal();
    }
}

btn.addEventListener("click",clickHandler);