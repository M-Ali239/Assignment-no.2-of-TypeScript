//Assignment 2,  07-08-2023
// //Q1> write a program to convert the celsius temperature into fahrenheit
// var fahrenheit:any=prompt("write temperature in fahrenheit");
// var Celsius:any=prompt("write temperature in celsius");
// if(fahrenheit){
// var celsius= (fahrenheit-32)*5/9;
// console.log(celsius+'\u00B0C');
// }
// else if (Celsius){
//  var Fahrenheit=(Celsius*9/5)+32;
//  console.log(Fahrenheit+'\u00B0F');
// }
//Q2> write a program that calculate the percentage.
// var givNum:any= prompt("write the given number");
// var totNum:any= prompt("write the total number");
// var percent= (givNum/totNum)*100;
// console.log(percent+"%");
//Q3> Write a program that converts given number of days in to weaks and days,such as 17 days = 2 weeks and 3 days.
// var data:any= prompt("enter days");
// var week= (data/7);
// var Week=(week);
// var day= data%7;
// console.log(Week+"--"+"weeks");
// console.log(day+"--"+"days");
//Q4> Write a program that calculates discount for product based on its price. If the price is above $100, apply 10% discount;otherwise apply 5% discount.
// var price:number=50;
// if (price>=100){
//     console.log("$"+price*10/100);
// }  
// else console.log("$"+price*5/100);
//Q5> Create a program that determine the category of a user-provided age. If the age is between 0 and 12, print "child". If it is between 13 and 19, print "teen ager". Otherwise print "Audult".
// var age:any=prompt("Enter age in years");
// if (age>0 && age<=13){
//     console.log("child");    
// }
// else if(age>13 && age<=19){
//     console.log("Teen ager");
// }
// else console.log("Adult");
//Q6>  Write a program that takea a temperature and check it.If it is cold then suggest the user to wear warm clothes and so on according to the weather.
// var temp:any=prompt("Enter temperature in celsius scale");
// if (temp<0){
//     console.log("wear Gloves, coat, socks and jacket with hood");
// }
// else if (temp>0 && temp<=20){
// console.log("wear warm clothers");
// }
// else if (temp>20){
// console.log("Wear light clothes");
// }
//Q7> Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyfonfe show out put accordingjy.
// var gn:any=prompt("enter the required number");
// if (gn%3==0 && gn%5==0){
//     console.log(gn+"-is divisible by 3 and 5")}
//  else if (gn%3==0){
//     console.log(gn+"-is divisible by 3");}
//  else if (gn%5==0){
//     console.log(gn+"-is divisible ny 5");}
//  if (gn%3!==0 && gn%5!==0){
//         console.log("It is not divisible by 3 or 5");
//  }
//Q8> Develop a progtam that determine the days of the week.Ask the user for a number (1-7) and use nested if statements to print the corresponding days name.
// var numOfDay:any=prompt("Write a number from 1 to 7");
// if (numOfDay==1){console.log("Monday")}
// else if (numOfDay==2){console.log("Tuesday")}
// else if (numOfDay==3){console.log("Wednesday")}
// else if (numOfDay==4){console.log("Thursday")}
// else if (numOfDay==5){console.log("Friday")}
// else if (numOfDay==6){console.log("Saturday")}
// else console.log("Sunday");
//Q9>  Write a program that takes the numer of units consumed by user, if it is greater than 100 units then add 10% of tax and if it is greater than 200 units,add 15% of tax and so on up to if greater than 500 units then add 25% of tax.Where the tax amount will be calculated by the amout of bill.
var units:any=prompt("Write the number of units consumed");
var price=units*10;
var tx10=price*10/100;
var tx15=price*15/100;
var tx20=price*20/100;
var tx25=price*25/100;
var tx30=price*30/100;

if (units>100 && units<=200){console.log(price+tx10+"<>"+"Is bill of electricity")}
if (units>200 && units<=300){console.log(price+tx15+"<>"+"Is bill of electricity")}
 if (units>300 && units<=400){console.log(price+tx20+"<>"+"Is bill of electricity")}
 if (units>400 && units<=500){console.log(price+tx25+"<>"+"Is bill of electricity")}
 if (units>500){console.log(price+tx30+"<>"+"Is bill ofelectricity")}

 //{END OFF EXERCISE No.2. ----09/08/2023}



