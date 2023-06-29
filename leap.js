function isLeap(year){
    /* if divisible by 4 then leap
        ==except it is divisible by 100
        === unless % by 400
    */
   if (year%4===0){
     if(year%100===0) {
        console.log("Not leap");


     }
     else{
        if(year%400===0){
            console.log("Yes, Leap");
        }
        else{
            console.log('Not Leap');
        }
     }
    
   }
   else{
    console.log("Not Leap year");
   }

}