<template>

    <header>
        <nav class="navbar p-3">

            <div class="container-fluid">

                <div>
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logo-boolflix.png" alt="BOOLFLIX" width="150">
                    </a>

                </div>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search"
                        v-model="store.searchText">
                    <button class="btn btn-outline-success" @click.prevent="fetchMovies">Cerca</button>
                </form>

            </div>

        </nav>
    </header>

</template>


<script>
import { store, fetchMovies } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchMovies,
    },
}
</script>

<style lang="scss" scoped>

</style>