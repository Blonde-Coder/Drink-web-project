const config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

let countrySelected = document.querySelector('.country')

function loadCountries() {
    let apiEndPoint = config.cUrl;
    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    // fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data => {
        // console.log(data);
        data.forEach(country => {
            const option = document.createElement('option')
            option.value = country.iso2
            option.textContent = country.name 
            countrySelected.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading countries:', error))

}

window.onload = loadCountries

