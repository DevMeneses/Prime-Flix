import axios from "axios";

//BASE URL : https://developers.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=6e18a2f68a91c381d66da3df097306c3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;