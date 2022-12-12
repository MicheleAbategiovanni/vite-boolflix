<template>

    <main>

        <div class="container py-3">

            <div class="row row-cols-3 g-3">
                
                <AppCard/>

            </div>


        </div>

    </main>

</template>


<script>
import AppCard from './AppCard.vue';

export default {
    components: { AppCard }
}
</script>

<style lang="scss" scoped>

</style>