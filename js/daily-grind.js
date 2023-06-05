/* 
pic - image src 
alt - alt tag for the page 
color - color to match image 
description - description of coffee
name - name of coffee
day  - day of the week 

*/
let myDate = new Date();
let today = myDate.getDay();

switch(today) {
    case 2: 
       today = "Tuesday";        
       break;
    case 3: 
       today = "Wednesday";        
        break;

    default:
        today = "Not sure what day it is. Error: There is an error";
}

// How to set up your data
coffee = { 
    name: "Bubble Tea", 
    color: "Pink ",
    image: "images/bubble-tea.jpg", 
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea`
}

//alert(today)
console.log(coffee)
