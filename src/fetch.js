


const ENDPOINT = "https://pixabay.com/api/";
const API_KEY = "33458251-0b67ccfbd4060c82b4c4d5dd0";
// let queryPage = 1;


export default class PixApi {
    constructor() {
        this.queryPage = 1;
        this.searchQuery = "";
    }

    getPic( ) {
    return fetch(`${ENDPOINT}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.queryPage}`)
        .then((res) => res.json())
        .then((data) => {
            this.incrementPage();
            return data;
        }); 
        
    
    }
    
    resetPage() {
        this.queryPage = 1;
    }

    incrementPage() {
        this.queryPage += 1;
    }
}

// function getPic(query) {
//     return fetch(`${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${queryPage}`)
//         .then((res) => res.json())
//         .then((data) => {
//             queryPage += 1;
//             return data;
//         });
        
    
// }



// export default { getPic };
