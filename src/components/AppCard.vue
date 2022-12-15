<template>

    <div class="card position-relative border-0 rounded-3" @click="getCard">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt=getName class="img-fluid rounded-2">

        <div class="overview-card position-absolute">

            <div>
                <span class="fs-3 fw-bold">Titolo: </span>
                <span>{{ getName }}</span>
            </div>

            <div  v-if="getName !== getOriginalName">
                <span class="fs-3 fw-bold">Titolo Originale: </span>
                <span>{{ getOriginalName }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Lingua: </span>
                <lang-flag :iso="movie.original_language" />
            </div>

            <div>

                <span class="fs-3 fw-bold">Voto: </span>
                <span v-for="vote in 5">

                    <i class="bi bi-star-fill" v-if="getVoted >= vote"></i>
                    <i class="bi bi-star" v-else="getVoted = 0"></i>

                </span>

            </div>

            <div>
                <div>{{ movie.overview }}</div>
            </div>

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
            card: false,
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
        getVoted() {
            return Math.ceil(this.movie.vote_average / 2);
        },
        getCard() {

            this.store.jumbotronList = this.movie;


        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    height: 100%;

    img {
        height: 100%;
    }

    .overview-card {
        opacity: 0;
        padding: 1rem;
        color: white;
        background-color: black;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: all 2s;
        overflow: auto;
        border: 1px solid;
        border-radius: .5rem;
    }

    &:hover {
        .overview-card {
            opacity: .8;
            transition: all 2s;
        }
    }
}
</style>