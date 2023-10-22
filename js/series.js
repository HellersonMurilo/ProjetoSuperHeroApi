//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc"

//url das series populares
var urlPopularSeries = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR"

//metodos para parametros no fetch
var options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
    }
};


var slides = document.getElementById('slides') //paizao dos slides

//fecth slide
/* fetch(urlPopularSeries, options)
    .then(response => response.json())
    .then(response => slide(response))

function slide(response) {
    console.log(response)
    response.results.slice(0,1).forEach(element => {
        let xoxotoSlide = document.createElement('div')
        xoxotoSlide.innerHTML = `
        <div class="imgSlide">

        
            <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg" alt="">
            <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/jsXKG9uppnPrhqFNhImllyCfLhl.jpg" alt="">
            <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg" alt="">
            
        </div>
        `

        slides.appendChild(xoxotoSlide);
    });
} */


//fecth novo
fetch(urlPopularSeries, options)
    .then(response => response.json())
    .then(response => showData(response))

const divPai = document.getElementById("paiPopular")

function showData(response) {
    response.results.forEach(element => {
        let postSerie = document.createElement('div')
        postSerie.innerHTML = `
        <div class="postSerie" id="post1">
        <a href="/infoSerie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt=""></a>
            <p>${element.name}</p>
            <p>⭐${element.vote_average}</p>
        </div>
        `
        divPai.appendChild(postSerie)
    });
}