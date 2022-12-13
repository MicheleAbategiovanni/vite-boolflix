<template>

    <main>

        <div class="container py-3">

            <!-- Container Movies -->
            <div>
                <h2 class="text-center text-danger">FILM</h2>

                <div class="row row-cols-3 g-3 py-3">

                    <div class="col" v-for="card, i in store.movieList" :key="i + '_movies'">

                        <AppCard :movie="card" />

                    </div>

                </div>
            </div>

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

.container {
    &>*{
        padding: 4rem 0;
    }
}

</style>