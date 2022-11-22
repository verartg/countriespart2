import axios from 'axios';

//form aanspreken en eventlistener op geplaatst. Als er wordt gesubmit/geentered, dan functie fetchcountries uitvoeren.
const formElement = document.getElementById('receivingInput');
formElement.addEventListener('submit', fetchCountries);

//VRAAG: waarom verdwijnt de data zo snel? :(

//variabele aangemaakt voor het laatste gedeelte van de uri.
const input = document.getElementById('inputfield')

//in deze functie wordt de endpoint gebruikt en de data van het ingevoerde land gebruikt. Van die data wordt de name, flag, subregion,
// population, capital en currencies via innerhtml op de pagina geplaatst. bij die laatste wordt er eerst een if functie uitgevoerd om te
// kijken of er één of twee currencies zijn.

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/name/' + INPUT.value);
        const country = result.data[0];
        console.log(country);
        const countryInformation = document.getElementById('countryInfo');
        countryInformation.innerHTML = `
    <p> ${country.name} <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" /></p>
    <p> ${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people.</p>
    <p> The capital is ${country.capital} ${valuta()} </p>
    `;

function valuta () {
    if (country.currencies.length === 2) {
            return "and you can pay with " + country.currencies[0].name + " and " + country.currencies[1].name + "'s";
    } else if (country.currencies.length === 1) {
           return "and you can pay with " + country.currencies[0].name;
    }
}

    } catch (err) {
        console.error(err);
    }
}