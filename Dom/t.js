function Person(name, gender, age, andress){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.address=andress;
    this.greeting =function(){
        return "Good Afternoon"
    }
}
const person=new Person("Jenaro", "male", 33, "Ruiru");
console.log(person.age);
//adding property to the the object
 person.hobby="driving";
 console.log(person.greeting());
