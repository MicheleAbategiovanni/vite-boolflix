<template>

    <main>

        <!-- Container Movies -->
        <section v-show="store.movieList.length > 0">
            <div class="container py-3">

                <div>
                    <h2 class="text-center text-danger">FILM</h2>

                    <div class="row row-cols-3 g-3 py-3">

                        <div class="col" v-for="card, i in store.movieList" :key="i + '_movies'">

                            <AppCard :movie="card" />

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- Container Series TV -->
        <section v-show="store.serieList.length > 0">
            <div class="container py-3">
                <!-- Container Series TV -->
                <div>
                    <h2 class="text-center text-danger">Serie TV</h2>

                    <div class="row row-cols-3 g-3">


                        <div class="col" v-for="card, i in store.serieList" :key="i + '_movies'">

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
import { store } from '../store.js';


export default {
    components: { AppCard },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>