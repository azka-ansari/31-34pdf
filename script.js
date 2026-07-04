//QUESTION ...1

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var today = new Date();
// var day = today.getDay();

// alert(days[day]);

// Question ...2

// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];

// var today = new Date();
// var month = today.getMonth();

// // document.write(months[month]);
// alert(months[month]);    

// Question....3

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var today = new Date();
// var day = today.getDay();

// alert(days[day]);

// Question...4

// var today = new Date();
// var day = today.getDay();

// if (day == 0 || day == 6) {
//     document.write("It's Fun day");
// }

// Question....5

// var today = new Date();
// var date = today.getDate();

// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// Question...6

// var today = new Date();

// var minutes = today.getTime() / (1000 * 60);

// document.write("Minutes since Jan 1, 1970: " + minutes);


// Question...7

// var time = new Date();

// var hour = time.getMinutes();

// if (hour <12) {
//     alert( "it's AM ")
// }else{
//     alert("It's PM")
// }

// Question...8
// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate);

// Question....9
// var ramadan = new Date("June 18, 2015");
// var today = new Date();

// var diff = today - ramadan;

// var days = Math.floor(diff / (1000* 60* 60 * 24));

// document.write(days+ " days have passed since 1st Ramadan");


// Question...10

// var refDate = new Date();
// var start2015 = new Date("January 1, 2015");

// var diff = refDate - start2015;

// var seconds = Math.floor(diff / 1000);

// document.write("Seconds elapsed between reference date and beginning of 2015: " + seconds);


// Question...11

// var today = new Date();
//  var hour = today.getHours();

// today.setHours( hour + 1);

// document.write(today)


// Question...12
// var today = new Date();

// today.setFullYear( today.getFullYear()-100);

// document.write(today);

// Question.......13

// var age = prompt("Enter your age");

// var today = new Date();
// var currentYear = today.getFullYear();

// var birthYear = currentYear - age;

// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);

// Question.....14

// var name = prompt("enter your name");
// document.write("Customer Name: " + name + "<br>");

// var months = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];

// var today = new Date();
// var month = months[today.getMonth()];
// document.write("Current Month: " + month + "<br>");

// var units = prompt("enter units");
// document.write("Number of Units: " + units + "<br>");

// var price = 16;
// document.write("Charges Per Unit: " + price.toFixed(2) + "<br>");

// var bill = units * price;
// document.write("Net Amount: " + bill.toFixed(2) + "<br>");

// var lateFee = 350;
// document.write("Late Payment: " + lateFee.toFixed(2) + "<br>");

// var totalBill = bill + lateFee;
// document.write("Gross Amount: " + totalBill.toFixed(2));

































