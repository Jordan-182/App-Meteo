// Déclaration clé d'API
const APIKEY = 'c04a6be2fb68c9aaffa796e49462ee99';

// Appel à l'API d'OpenWeather avec la ville en paramètre de fonction
let apiCall = function(city){
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('#temp').innerHTML =  data.main.temp + '°';
        document.querySelector('#city').innerHTML = "<i class='fa-solid fa-location-dot'></i>" + data.name;
        document.querySelector('#description').innerHTML = data.weather[0].description;
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
        document.querySelector('#pressure').innerHTML = data.main.pressure + " hPa";
        
        // Appel de la fonction background une fois que les données sont récupérées
        background();
    })
    .catch(err => console.log('Erreur : ' + err));
}


// Ecouteur d'évènement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let city = document.querySelector('#inputCity').value;
    apiCall(city);
});

// Adaptation background
function background(){
    let descriptionText = document.querySelector("#description").textContent.trim();
    console.log("Description récupérée :", descriptionText);
    if(descriptionText === "couvert" || descriptionText ==="nuageux" || descriptionText ==="orage" || descriptionText ==="bruine" || descriptionText ==="légère pluie" || descriptionText ==="bruine légère"){
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-white', 'via-cyan-100', 'to-white');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-blue-400', 'via-sky-500', 'to-blue-400');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-sky-400', 'via-stone-300', 'to-sky-500');
        document.querySelector('body').classList.add('bg-gradient-to-r', 'from-neutral-500', 'via-neutral-400', 'to-neutral-500');
    }
    else if(descriptionText ==="chutes de neige" || descriptionText ==="légères chutes de neige"){
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-blue-400', 'via-sky-500', 'to-blue-400');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-neutral-500', 'via-neutral-400', 'to-neutral-500');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-sky-400', 'via-stone-300', 'to-sky-500');
        document.querySelector('body').classList.add('bg-gradient-to-r', 'from-white', 'via-cyan-100', 'to-white');
    }
    else if(descriptionText === "partiellement nuageux"){
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-white', 'via-cyan-100', 'to-white');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-neutral-500', 'via-neutral-400', 'to-neutral-500');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-blue-400', 'via-sky-500', 'to-blue-400');
        document.querySelector('body').classList.add('bg-gradient-to-r', 'from-sky-400', 'via-stone-300', 'to-sky-500');
    }
    else {
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-white', 'via-cyan-100', 'to-white');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-neutral-500', 'via-neutral-400', 'to-neutral-500');
        document.querySelector('body').classList.remove('bg-gradient-to-r', 'from-sky-400', 'via-stone-300', 'to-sky-500');
        document.querySelector('body').classList.add('bg-gradient-to-r', 'from-blue-400', 'via-sky-500', 'to-blue-400');
    }
}

// Appel par défaut au chargement de la page
apiCall('Croix');