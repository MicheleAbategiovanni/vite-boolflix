<template>

    <main>

        <!-- Container Movies Popular -->
        <section v-if="store.searchText == ''">
            <div class="p-5">


                <h2 class="text-red">FILM POPOLARI</h2>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 flex-nowrap overflow-auto">

                    <div class="col" v-for="card, i in store.moviePopularList" :key="i + '_moviesPopular'">

                        <AppCard :movie="card" />

                    </div>

                </div>



            </div>

        </section>

        <!-- Container Series Popular -->
        <section v-if="store.searchText == ''">
            <div class="p-5">

                    <h2 class="text-red">SERIE TV - POPOLARI</h2>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 gy-0 flex-nowrap overflow-auto">

                        <div class="col" v-for="card, i in store.seriesPopularList" :key="i + '_seriesPopular'">

                            <AppCard :movie="card" />

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

                            <AppCard :movie="card" />

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

                            <!-- Movie refers to series ! -->
                            <AppCard :movie="card" />

                        </div>

                    </div>

                </div>

            </div>
        </section>

    </main>

</template>


<script>
import AppCard from './AppCard.vue';
import {

    store,
    createPopularMovie,

} from '../store.js';


export default {
    components: { AppCard },
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
</style>