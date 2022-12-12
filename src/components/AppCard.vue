<template>

    <div class="col" v-for="card, i in store.movieList" :key="i + '_card'">

        <div class="card">
            <div>
                <span class="fs-3 fw-bold">Titolo: </span>
                <span>{{ card.title }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Titolo Originale: </span>
                <span>{{ card.original_title }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Lingua: </span>
                <span>{{ card.original_language }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Voto: </span>
                <span>{{ card.vote_average }}</span>

            </div>
        </div>

    </div>

    <div class="col" v-for="card, i in store.serieList" :key="i + '_card'">

        <div class="card">
            <div>
                <span class="fs-3 fw-bold">Titolo: </span>
                <span>{{ card.name }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Titolo Originale: </span>
                <span>{{ card.original_name }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Lingua: </span>
                <span>{{ card.original_language }}</span>
            </div>

            <div>
                <span class="fs-3 fw-bold">Voto: </span>
                <span>{{ card.vote_average }}</span>

            </div>
        </div>

    </div>

</template>

<script>
import { store } from '../store.js';
export default {

    data() {
        return {
            store,
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>

</style>