import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

    searchText: "",
    loading: false,
    movieList: [],
    serieList: [],
    moviePopularList: [],
    seriesPopularList: [],

});

export function fetchMovies() {

    console.log("CLICCATO CERCA BOTTONE");
    

    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: '320185988973d0ae03a4ed5de02ddb4d',
            query: store.searchText,
            language: 'it-IT',
        }
    })
        .then((resp) => {
            console.log("Movie: ", resp.data.results);

            store.movieList = resp.data.results;

        })


    axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
            api_key: '320185988973d0ae03a4ed5de02ddb4d',
            query: store.searchText,
            language: 'it-IT',
        }
    })

        .then((resp2) => {
            console.log("Series:", resp2.data.results);

            store.serieList = resp2.data.results;

        })

        .catch((error) => {
            this.ajaxError =
                "A causa di un errore, l'operazione non è andata a buon fine";

            store.loading = false;
        });
}

export function createPopularMovie() {

    console.log("CLICCATO CERCA BOTTONE");

    axios.get("https://api.themoviedb.org/3/movie/popular", {
        params: {
            api_key: '320185988973d0ae03a4ed5de02ddb4d',
            language: 'it-IT',
        }
    })
        .then((resp) => {
            console.log("Movie Popular: ", resp.data.results);

            store.moviePopularList = resp.data.results;

        })


    axios.get("https://api.themoviedb.org/3/tv/popular", {
        params: {
            api_key: '320185988973d0ae03a4ed5de02ddb4d',
            language: 'it-IT',
        }
    })

        .then((resp2) => {
            console.log("Series Popular:", resp2.data.results);

            store.seriesPopularList = resp2.data.results;

        })

        .catch((error) => {
            this.ajaxError =
                "A causa di un errore, l'operazione non è andata a buon fine";

            store.loading = false;
        });
}