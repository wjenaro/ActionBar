/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print "Fizz " instead of the number and for the multiple of five print "Buzz".
for numbers which are multiple of boht three and five print "FizzBuzz"

*/


let i=1;
while (i<=100){
 //conditions 
 if (i%3===0 && i%5!=0){
     console.log('Fizz');
     
 }
 else if (i%5===0 && i%3!=0){
     console.log("Buzz");
     
 }
 else if (i%3===0 && i%5===0){
     console.log("FizzBuzz");
     
 }
 else{
     console.log(i);
 }
i++
}