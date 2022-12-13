<template>

    <div class="card">
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
            <span>{{ movie.vote_average }}</span>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>