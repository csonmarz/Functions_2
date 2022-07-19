function EbayFee(sellPrice){
return feeTotal
}
   //Base listing fee
   feeTotal= 0.50
   
    if (sellPrice <= 50.00){
      // $50.00 or lower
      feeTotal = feeTotal + (sellPrice * 0.13)
    }
    else if (sellPrice <= 1000.00){
      // $ 50.01..$1000.00
      feeTotal= feeTotal + (50 * 0.13)
      feeTotal= feeTotal + ((sellPrice - 50)* 0.05)
    }
    else {
      // $1000.01 and higher
      feeTotal= feeTotal + (50 * 0.13)
      feeTotal= feeTotal + ((1000 - 50) * 0.05)
      feeTotal= feeTotal + ((sellPrice - 1000) * 0.02)
    }
   

function Main(){
return nothing
}
   var sellingPrice
   
   sellingPrice= window.prompt("9.95")
   console.log("eBay fee: $ ")
   console.log(EbayFee(sellingPrice))