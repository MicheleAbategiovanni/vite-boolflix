<template>

    <main>

        <!-- Jumbotron -->
        <AppJumbotron />

        <!-- Container Movies Popular -->
        <section v-if="store.searchText == ''" style="margin-top: -140px;">
            <div class="p-5">


                <h4 class="text-red p-3">FILM POPOLARI</h4>

                <div
                    class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 flex-nowrap overflow-auto  rounded-3 bg-card p-3">

                    <div class="col" v-for="card, i in store.moviePopularList" :key="i + '_moviesPopular'">

                        <a href="#">
                            <AppCard :movie="card" />

                        </a>

                    </div>

                </div>



            </div>

        </section>

        <!-- Container Series Popular -->
        <section v-if="store.searchText == ''">
            <div class="p-5">

                <h4 class="text-red p-3">SERIE TV - POPOLARI</h4>

                <div
                    class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 gy-0 flex-nowrap overflow-auto rounded-3 bg-card p-3">

                    <div class="col" v-for="card, i in store.seriesPopularList" :key="i + '_seriesPopular'">

                        <a href="#">
                            <AppCard :movie="card" />
                        </a>

                    </div>

                </div>

            </div>

        </section>

        <!-- Container Movies -->
        <section v-show="store.movieList.length > 0">
            <div class="p-5 ">

                <div>
                    <h2 class="text-center text-red">FILM</h2>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">

                        <div class="col" v-for="card, i in store.movieList" :key="i + '_movies'">

                            <a href="#">
                                <AppCard :movie="card" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- Container Series TV -->
        <section v-show="store.serieList.length > 0">
            <div class="p-5">
                <!-- Container Series TV -->
                <div>
                    <h2 class="text-center text-danger">Serie TV</h2>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 ">


                        <div class="col" v-for="card, i in store.serieList" :key="i + '_series'">

                            <a href="#">
                                <AppCard :movie="card" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section class="text-center">
            <h5 class="text-info">Created With ♥️ by Michele Abategiovanni</h5>
        </section>
    </main>

</template>


<script>
import AppCard from './AppCard.vue';
import AppJumbotron from './AppJumbotron.vue';
import {

    store,
    createPopularMovie,

} from '../store.js';


export default {
    components: { AppCard, AppJumbotron },
    data() {
        return {
            store,
        }
    },
    created() {
        createPopularMovie()
    },
}
</script>

<style lang="scss" scoped>
.text-red {
    color: #DB202C;
}

main {
    height: 90vh;
    overflow: auto;
}

.bg-card {
    background-color: #000000a3;
}
</style>