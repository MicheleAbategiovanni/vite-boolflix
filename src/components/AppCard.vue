<template>

    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt=getName>

        <div>
            <span class="fs-3 fw-bold">Titolo: </span>
            <span>{{ getName }}</span>
        </div>

        <div>
            <span class="fs-3 fw-bold">Titolo Originale: </span>
            <span>{{ getOriginalName }}</span>
        </div>

        <div>
            <span class="fs-3 fw-bold">Lingua: </span>
            <lang-flag :iso="movie.original_language" />
        </div>

        <div>
            <span class="fs-3 fw-bold">Voto: </span>
            <span>{{ getVoted }}</span>
            <span><i class="bi bi-star-fill"></i></span>
        </div>

    </div>

</template>

<script>
import { store } from '../store.js';
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'AppCard',
    props: {
        movie: Object,
    },
    components: { LangFlag },
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    computed: {
        getName() {
            return this.movie.title ? this.movie.title : this.movie.name
        },
        getOriginalName() {
            return this.movie.original_title ? this.movie.original_title : this.movie.original_name
        },
        getVoted () {
            return Math.ceil(this.movie.vote_average / 2);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>