//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc"

//url das series populares
var urlFilmesPopulares = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR"

//metodos para parametros no fetch
var options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
    }
};

fetch(urlFilmesPopulares, options)
.then(response => response.json())
.then(response => showInfos(response))

const paiFilmes = document.getElementById("paiFilmes")

function showInfos(response) {
    console.log(response)
    response.results.forEach(element => {
        let cardFilme = document.createElement('div')
        cardFilme.innerHTML = `
        <div class="cardFilme" id="card1">
        <a href="/movie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt=""></a>
            <p>${element.original_title}</p>
            <p>⭐${element.vote_average}</p>
        </div>
        `
        paiFilmes.appendChild(cardFilme)
    });
}