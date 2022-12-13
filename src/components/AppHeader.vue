<template>

    <header>
        <nav class="navbar navbar-expand-lg p-3">

            <div class="container-fluid">

                <div>
                    <a class="navbar-brand" href="localhost">
                        <img src="../assets/logo-boolflix.png" alt="BOOLFLIX" width="150">
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Film</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">La mia lista</a>
                        </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search"
                            v-model="store.searchText">
                        <button class="btn text-white" @click.prevent="fetchMovies">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>


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