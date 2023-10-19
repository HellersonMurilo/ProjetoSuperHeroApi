//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc"

//url do tendencias 
var urlTendencias = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR"

//metodos para parametros no fetch
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
    }
};

//fetch para obter os objetos da Url
fetch(urlTendencias, options)
    .then(response => response.json())
    .then(response => showInfo(response))
    .catch(err => console.error(err));

//função que realizar o printar os resultados
const containerPai = document.getElementById('pai')

function showInfo(response) {
    response.results.slice(0, 10).forEach(element => {
        console.log(element)
        let cards = document.createElement('div')
        cards.innerHTML = `
        <div class="imagem" id="card1">
            <img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="">
            <p>${element.title}</p>
            <p>⭐${element.vote_average}</p>
        </div>
        `
        containerPai.appendChild(cards)

    });
}