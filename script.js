// console.log("javascript is intact");
let searchBtn = document.querySelector(".searchBtn");
let inputField = document.getElementById("inputField");

searchBtn.addEventListener('click', () => {
    let countryName = "India";
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
    })
})