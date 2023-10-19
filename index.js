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
        Authorization: 'Bearer' + accessToken
    }
};

//fetch para obter os objetos da Url
fetch(urlTendencias, options)
    .then(response => response.json())
    .then(response => showInfo(response))
    .catch(err => console.error(err));

//função que realizar o printar os resultados
function showInfo(response) {
    console.log(response)
}