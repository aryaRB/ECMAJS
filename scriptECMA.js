// console.log(square)

// ----- Edabit -----
  
    //   Question link : https://edabit.com/challenge/ARr5tA458o2tC9FTN 

// Very Easy

// console.log("hello")


// var hello = 



// Object


// var a = {

//     name : "john",
//     age : 38,
//     hobby : "Soccer"
// };

// c = a.name
// console.log(c)


// function object(){

//     a = {

//         name : "John",
//         Address : "NYC",
//         number : 4485
//     }

//     console.log(a.Address)
//     return
// }

// object()

//Methods

// var details = {

//     name : "John",
//     Resident : "NYC",
//     workplace : "Seattle",
//     Age : "23",

//     perdetails : function(){

//         return "His name is " + this.name + " and age is " + this.age ;
//     },
// }

// document.getElementById("demo").innerHTML = details.perdetails();

// keyless car entry



// var checkDriverAge = () =>{
// var age = prompt("What is your age?");
// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// return 
// }

// checkDriverAge()


// Javascript is Sexy

// Objects

// var objects = {

//     firstname : "Arya",
//     lastname : "barua",
//     22 : "age"

    
// }

// console.log(objects.firstname);
// console.log(objects.lastname);
// console.log(objects["22"]);

//referwnce datatypes vs Primitive datatypes

//reference datatype

// var name = "Arya"
// var Sister = name
// name = "Sansa" 

//console.log(Sister)     ---> here name is Arya
// console.log(name)      ---> here name is Sansa

//Primitive Datatypes

// var name = {

//     namegot : "Arya"
// }
// var Sister = name;
// name.namegot = "Sansa"

// console.log(name.namegot)     ---> here name is Sansa
// console.log(Sister.namegot);  ---> here name is Sansa


//contructor literals

// var obj = {

//     name : "Arya",

//     name2 : function(){
//         console.log("Sansa");
//     }
// }
// console.log(obj)

//object constructors for small scale

// var obj = new Object();    //<--- constructor

// obj.name ="Arya";
// obj.sister = "Sansa";

// obj.brother = function()
// { console.log("jon snow")};

// console.log(obj)
// console.log(obj.brother)


// pattern for creating Objects

// function Info(Name, Age, AccountNo, bank)
// {
//     this.Name = Name;
//     this.Age = Age;
//     this.AccountNo = AccountNo;
//     this.bank = bank;

//     this.statement  = function(){
//         return "Your "+ this.name + "Age" + this.Age 
//         +" AccountNo" + this.AccountNo + "and" + " bank" + this.bank
//     }
// }

// var personinfo = new Info("Arya" , 21 , 123456 , "SBI");

// console.log(personinfo);

//Accessing Inherited Items

// function School(){

//     this.midSchool = "schoolmid";
//     this.teacherStrength = "60";
// }

// var obj = new School()    // using contructor inhriting the property

// obj.name = "vkv";
// obj.place = "kanyakumari";
// obj.principal = "savdeykar ji";

// for (var eachItem in obj){
//    console.log(eachItem;
// }     

//JSON stringify


// var bank = {

//     name : "sbi",
//     branches : "549",
//     employees : 80000

// }

// var bank1 = JSON.stringify(bank)  //in JSON stringify the object is converted to as string using JSON.Stringyfy
// console.log(bank1)

// var bank2 = JSON.parse(bank1)     //in JSON stringify the string is converted to as object using JSON.parse
// console.log(bank2.name)


//PROTOTYPE

// from MDN

// function person(first,last,Age,Height,Chest,Biceps,Waist,Thighs){

//     this.fullName = {
         
//         'first' : first,
//         'last' : last 

//     }
//     this.Age = Age;
//     this.Height = Height;
//     this.bodymeasurement = {

//         'Chest' : Chest,
//         'Biceps' : Biceps,
//         'Waist' : Waist,
//         'Thighs' : Thighs
//     }
// }

// var person1 = new person('Ankit','Pathak',24,170,40,15,32,25)

// console.log(person1.bodymeasurement)


// using Object.prototype

let person = Object.create(person1);
person.__proto__

