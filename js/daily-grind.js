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

function coffeTemplate(coffee) {
    return `
    <p>
    <img src="${coffee.image}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    <p>

    `; 
}

switch(today) {
    case 1:
        today = "Monday;";
        coffee = { 
            name: "Bubble Tea", 
            color: "Pink ",
            image: "images/bubble-tea.jpg", 
            alt: "A picture of a bubble tea",
            day: "Wednesday",
            desc: `I like me some bubble tea`
        }
        
    case 2: 
       today = "Tuesday";        
       break;
    case 3: 
       today = "Wednesday";        
        break;

    default:
        today = "Not sure what day it is. Error: There is an error";
}

document.getElementById("coffee-cup").innerHTML = coffeTemplate(coffee)

// How to set an object 
coffee = { 
    name: "Bubble Tea", 
    color: "Pink ",
    image: "images/bubble-tea.jpg", 
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea`
}

//alert(today)
console.log(coffee);
