const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});


async function getTrendingMoviesPreview(){
    const {status, data} = await api(`/trending/movie/day?language=es-MX`);
    const movies = data.results; 

    movies.forEach(movie => {
        const treningPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieIMG= document.createElement('img');
        movieIMG.classList.add('movie-img');
        movieIMG.setAttribute('alt', movie.title);
        movieIMG.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ movie.poster_path);
        
        movieContainer.appendChild(movieIMG);
        treningPreviewMoviesContainer.appendChild(movieContainer);
    });
    
}
// async function getCategoriesPreview(){
//     const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-MX`);
//     const data = await res.json()
//     const categories = data.genres;
//     categories.forEach(category => {
//         const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
//         const categoryContainer = document.createElement('div');
//         categoryContainer.classList.add('category-container');

//         const categoryTitle = document.createElement('h3');
//         categoryTitle.classList.add('category-title');
//         categoryTitle.setAttribute('id', `id${category.id}`);
//         const categoryTitleText = document.createTextNode(category.name);

//         categoryTitle.appendChild(categoryTitleText);
//         categoryContainer.appendChild(categoryTitle);
//         previewCategoriesContainer.appendChild(categoryContainer);

//     })
// } con fetch (sin axios)

async function getCategoriesPreview(){
    const {status, data} = await api(`/genre/movie/list?language=es-MX`);
    const categories = data.genres;
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);

    })
}
getCategoriesPreview();
getTrendingMoviesPreview();