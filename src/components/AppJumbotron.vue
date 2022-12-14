<template>

    <div class="p-5">

        <div class="row row-cols-1 row-cols-md-2 text-white">
            <div class="col">
                <div>
                    <h1>{{ getName }}</h1>
                </div>

                <div>
                    <p v-show="store.cardSelected.overview !== ''">{{ store.cardSelected.overview }}</p>
                </div>

                <div>
                    <span v-for="vote in 5">

                        <i class="bi bi-star-fill" v-if="getVoted >= vote"></i>
                        <i class="bi bi-star" v-else="getVoted = 0"></i>

                    </span>
                </div>

                <div class="py-5">
                    <span>

                        <button class="btn btn-primary px-3 rounded-5">
                            <i class="bi bi-play-fill"></i>
                            Guarda ora
                        </button>
                    </span>

                    <span class="px-3">

                        <button class="btn btn-primary px-3 rounded-5">Trailer</button>
                    </span>
                </div>

            </div>

            <div class="col"></div>
            
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