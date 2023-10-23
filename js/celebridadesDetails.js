const url = window.location.href

var id = url.split('?id=')[1]

const apiKey = "596ccf1050c22a761282ea036f9eb6d8"

var options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
    }
};

var urlCelebridades = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=pt-BR
`

console.log(urlCelebridades)

//obtendo a div Pai para o appendChild
var ludimilo = document.getElementById('amazonio')

//fetch para obter os objetos da Url
fetch(urlCelebridades, options)
    .then(response => response.json())
    .then(response => showInfoFilm(response))
    .catch(err => console.log(err));

function showInfoFilm(response) {
    //obtendo a data
    var meses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    var data = new Date();
    var dia = response.birthday.split('-'); // Obtém o dia do mês criando uma lista
    var diaNumero = dia[2]; // Obtém o dia
    var mesNumero = dia[1]; // Obtém o mês
    var ano = dia[0]; // Obtém o ano
    var mesAtual = meses[mesNumero - 1]; // Obtém o mês atual por extenso

    let infoCelebridades = document.createElement('div')
    
    infoCelebridades.innerHTML = `
      <div class="corpoPrincipal" id="corpoPrincipal">
      <img src="https://image.tmdb.org/t/p/w300${response.profile_path}" alt="">
      <div class="infoCards" id="infoCards">
          <h1>${response.name}</h1>
          <span>Nascimento: ${diaNumero + " " + mesAtual + " " + ano} ⚪ Falecimento:${response.deathday == null ? " - ": response.deathday}</span>
          <p>Departamento: ${response.known_for_department}</p>
          <i class="tagLine">Local de Nascimento: ${response.place_of_birth}</i>
          <h6>BIOGRAFIA</h6>
          <p>${response.biography}</p>
      </div>
  </div>
      `

    ludimilo.appendChild(infoCelebridades)
}