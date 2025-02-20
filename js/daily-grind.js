/*

    Here are the items we believe we need to produce for each day's coffee

    pic - image scr
    alt - the alt tag for the image
    color - color to match image
    desc - description of the coffee
    name - name of the coffee
    day - day of the week


*/

function coffeeTemplate() {
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    `;
}

let myDate = new Date();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch (today) {

    case 0:
        today = "Sunday";
        coffee = {
            name: "Pumpking Spice Latte",
            color: "orange",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            day: "Monday",
            desc: `I love me some pumpkin spice latte!`
        }
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Bubble Tea",
            color: "pink",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some bubble tea!`
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Drip Coffee",
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `Give it to me straight!`
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Caramel Latte",
            color: "yellow",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Wednesday",
            desc: `Give it to me straight!`
        }
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Cold Brew",
            color: "brown",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Thursday",
            desc: `Come join us and try our best home day cold brew!`
        }
        break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Friday Frappaccino",
            color: "white",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappacino",
            day: "Friday",
            desc: `Come enjoy our frappacino on a warm day to refresh!`
        }
        break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Mocha",
            color: "lightblue",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            day: "Saturday",
            desc: `Come over and taste our delicious Mocha, made to you freshly!`
        }
        break;

    default:
        today = "Not sure what day it is!";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

//alert(today);
console.log(coffee);