<template>

    <section class=""
        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original` + `${getBackground}` }"
        v-if="store.searchText == ''">

        <div class="p-5 ">

            <div class="row row-cols-1 row-cols-md-2 text-white">
                <div class="col">
                    <div>
                        <h1>{{ getName }}</h1>
                    </div>

                    <div>
                        <p v-show="store.jumbotronList.overview !== ''">{{ store.jumbotronList.overview }}</p>
                    </div>

                    <div>
                        <span v-for="vote in 5">

                            <i class="bi bi-star-fill" v-if="getVoted >= vote"></i>
                            <i class="bi bi-star" v-else="getVoted = 0"></i>

                        </span>
                    </div>

                    <div class="py-3">
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

                <div class="col">
                </div>

            </div>

        </div>

    </section>

</template>


<script>
import { store, getJumbotronSelected } from '../store.js';

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
            return this.store.jumbotronList.title ?? this.store.jumbotronList.name
        },
        getVoted() {
            return Math.ceil(this.store.jumbotronList.vote_average / 2);
        },
        getBackground() {
            return this.store.jumbotronList.backdrop_path 
        }
    },
    created() {
        getJumbotronSelected()
    }
}


</script>


<style lang="scss" scoped>
img {
    width: 100%;
}

.title-absolute {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    bottom: 0;
}

section {
    width: 100%;
    min-height: 80%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>