const btnBusca = document.getElementById('botaoPesquisa')


btnBusca.addEventListener('click', () => {
    var campoBusca = document.getElementById('campoBusca').value

    try {
        if (campoBusca.trim() == "") {
            alert("Favor inserir o nome do filme")
        } else {
            //direcionando a pagina do filme
            window.location.href = `../buscaFilme.html?search=${encodeURIComponent(campoBusca)}`;
            //url busca filme pelo o nome dele
            var url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${campoBusca}&language=pt-BR`
            console.log(url)

            //metodos para parametros no fetch
            var options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
                }
            }

            //fetch
            fetch(url, options)
                .then(result => result.json())
                .then(result => searchFilm(result))

            //função para retornar o valor da API por JSON
            function searchFilm(result) {
                const divPai = document.getElementById('paiBuscaFilmes')
                result.results.forEach(element => {
                    let filmesFilho = document.createElement('div')
                    filmesFilho.innerHTML = `
                    <div class="cardFilme" id="card1">
                        <a href="/movie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt=""></a>
                        <p>${element.title}</p>
                        <p>⭐${element.vote_average.toFixed(1)}/10</p>
                    </div>
        `
                    divPai.appendChild(filmesFilho)
                });
            }
        }
    } catch (error) {

    }
})