

export default class PixApi {
    constructor() {
        this.queryPage = '';
        this.searchQuery = "";
    }

    async getPic() {
        const ENDPOINT = "https://pixabay.com/api/";
        const API_KEY = "33458251-0b67ccfbd4060c82b4c4d5dd0";
        const response = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.queryPage}`);
        this.incrementPage();
        return response;
  
     
    }
    
    resetPage() {
        this.queryPage = 1;
    }

    incrementPage() {
        this.queryPage += 1;
    }

    get query() {
        return this.searchQuery;
        }
    set query(newQuery) {
        this.searchQuery = newQuery;
  }
}

