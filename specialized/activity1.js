function StepsToCalories(numSteps) {
return caloriesTotal
}

   var stepsPerMinute
   var calPerMinuteWalking
   var minutesTotal
   
   //Typical adult
   calPerMinuteWalking=3.5
   
   minutesTotal=numSteps/stepsPerMinute
   caloriesTotal=minutesTotal*calPerMinuteWalking
   
function StepsToMiles(numSteps) {
return milesTotal
}
   var feetPerStep
   var feetPerMile
   feetPerMile=5280
   
   //Typical adult
   feetPerStep=2.5
   
   milesTotal= numSteps*feetPerStep*(1.0/feetPerMile)
   
function Main(){
return nothing 
}
   var stepsWalked
   stepsWalked= window.prompt("1600")
   console.log(" miles walked: ")
   console.log(StepsToMiles(stepsWalked))
   console.log(" \n ")
   console.log(" Calories: ")
   console.log(StepsToCalories(stepsWalked))
   console.log(" \n ")