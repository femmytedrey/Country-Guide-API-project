// console.log("javascript is intact");
let searchBtn = document.querySelector(".searchBtn");
let inputField = document.getElementById("inputField");
const loadingElement = document.getElementById("loading");


searchBtn.addEventListener('click', () => {
    if(inputField.value === ""){
        alert("Input field cannot be empty");
    }

    let countryName = inputField.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        
        result.innerHTML = `
        <div class = "flagBox">
        <img src = "${data[0].flags.svg}" class = "flag">
        </div>

        <h2>${data[0].name.common}</h2>
        <div class = "data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>

        <div class = "data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>

        <div class = "data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
        </div>

        <div class = "data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>

        <div class = "data-wrapper">
            <h4>Common Language:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>

        <div class = "data-wrapper">
            <h4>Time zone:</h4>
            <span>${data[0].timezones[0]}</span>
        </div>
        
        `
    })
    .catch(() =>{
        result.innerHTML = `<h3 class = "error">Couldn't find country!</h3>`;
    });
})