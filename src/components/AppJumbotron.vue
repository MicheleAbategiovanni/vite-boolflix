<template>

    <div class="p-5">

        <div class="row text-white">
            <div class="col">
                <div>
                    <h3>Titolo:</h3>
                    <span>{{ getName }}</span>
                </div>

                <div>
                    <h3>Trama</h3>
                    <span>{{ store.cardSelected.overview }}</span>
                </div>

                <div>
                    <span class="fs-3 fw-bold">Voto: </span>
                    <span v-for="vote in 5">

                        <i class="bi bi-star-fill" v-if="getVoted >= vote"></i>
                        <i class="bi bi-star" v-else="getVoted = 0"></i>

                    </span>
                </div>

                <div>
                    <button class="btn btn-primary px-3 rounded-5">
                        <i class="bi bi-play-fill"></i>
                        Guarda ora
                    </button>
                    <button class="btn btn-primary px-3 rounded-5">Trailer</button>
                </div>
            </div>

            <div class="col">dx</div>
        </div>

    </div>


</template>



<script>
import { store } from '../store.js';

export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    computed: {
        getName() {
            return this.store.cardSelected.title ?? this.store.cardSelected.name
        },
        getVoted() {
            return Math.ceil(this.store.cardSelected.vote_average / 2);
        },
    }
}


</script>



<style lang="scss" scoped>

</style>