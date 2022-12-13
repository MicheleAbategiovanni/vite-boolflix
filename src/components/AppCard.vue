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
            <span>{{ movie.original_language }}</span>
        </div>

        <div>
            <span class="fs-3 fw-bold">Voto: </span>
            <span>{{ movie.vote_average }}</span>
        </div>
    </div>

</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppCard',
    props: {
        movie: Object,
    },
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