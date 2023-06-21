function isLeap(year){
    /* if divisible by 4 then leap
        ==except it is divisible by 100
        === unless % by 400
    */
   if (year%4===0 && year%100===0){
    alert("not leap year");
   }
   if( year%4===0 && year%400===0){
    alert("is Leap Year");
   }

}