//j query
// $('.search-button').on('click', function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=960f3b0a&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movies-container').html(cards);


//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=960f3b0a&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
    
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 })
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// })


//fetch
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click', function () {

//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch('http://www.omdbapi.com/?apikey=960f3b0a&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m))
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             const movieDetail = document.querySelectorAll('.modal-detail-button')
//             movieDetail.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=960f3b0a&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieModalContainer = showMovieDetail(m);
//                             const modal = document.querySelector('.modal-body')
//                             modal.innerHTML = movieModalContainer;
//                         })
//                     })
//             })
//         })
// })

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value)
    updateUI(movies);
})

function getMovies(key) {
    return fetch('http://www.omdbapi.com/?apikey=960f3b0a&s=' + key)
        .then(response => response.json())
        .then(response => response.Search)
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

//event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movie = await getMoviesDetail(imdbid)
        updateUIDetail(movie)
    }
})

function getMoviesDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=960f3b0a&i=' + imdbid)
    .then(response => response.json())
    .then(m => m)
}

function updateUIDetail(m) {
    const moviesDetail = showMovieDetail(m)
    const modalDetail = document.querySelector('.modal-body')
    modalDetail.innerHTML = moviesDetail;
}

function showCards(m) {
    return `
    <div class="col-md-4">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top p-3">
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted"><h6>${m.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details
              </a>
            </div>
        </div>
    </div>
    `
}

function showMovieDetail(m) {
    return `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 d-flex justify-content-center align-items-center my-1">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md border-0 d-flex justify-content-center align-items-center">
                <ul class="list-group border-0">
                    <li class="list-group-item">
                        <h4>${m.Title} (${m.Year}</h4>
                    </li>
                    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writers : </strong>${m.Writer}</li>
                    <li class="list-group-item"><Strong>Country : </Strong>${m.Country}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}