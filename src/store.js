import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

    searchText: "",
    loading: false,

});

export function fetchMovies() {

    console.log("CLICCATO CERCA BOTTONE");

    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: '320185988973d0ae03a4ed5de02ddb4d',
            query: store.searchText,
        }
    })

        .then((resp) => {
            console.log(resp.data);
        })

        .catch((error) => {
            this.ajaxError =
                "A causa di un errore, l'operazione non è andata a buon fine";

            store.loading = false;
        });
}