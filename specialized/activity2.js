function Main(){
return nothing
}
   var stepsWalked
   var feetPerStep
   var feetPerMile
   var stepsPerMinute
   var calPerMinuteWalking
   var minutesTotal
   var caloriesTotal
   var milesWalked
   
   feetPerMile=5280
   
   //Typical adult
   feetPerStep=2.5
   
   //Typical adult
   stepsPerMinute=70.0
   
   //Typical adult
   calPerMinuteWalking=3.5
   
   stepsWalked= window.prompt("1600")
   milesWalked= stepsWalked*feetPerStep*(1.0/feetPerMile)
   console.log("Miles Walked: ")
   console.log(milesWalked)
   console.log(" \n ")
   minutesTotal= stepsWalked/stepsPerMinute
   caloriesTotal= minutesTotal* calPerMinuteWalking