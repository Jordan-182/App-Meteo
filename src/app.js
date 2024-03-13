// Déclaration clé d'API
const APIKEY = 'c04a6be2fb68c9aaffa796e49462ee99';

// Appel à l'API d'OpenWeather avec la ville en paramètre de fonction
let apiCall = function(city){
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr';

    fetch(url).then((response) =>
    response.json().then((data) => {
    document.querySelector('#city').innerHTML = "<i class='fa-solid fa-location-dot'></i> " + data.name;
    document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°';
    document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
    document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km-h';
    })
    ).catch(err => console.log('Erreur : ' + err));
}

// Ecouteur d'évènement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let city = document.querySelector('#inputCity').value;
    apiCall(city);
});

// Appel par défaut au chargement de la page
apiCall('Lens');