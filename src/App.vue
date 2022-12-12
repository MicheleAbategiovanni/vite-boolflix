
<template>


<AppHeader />

<AppMain />


</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  components: { AppHeader, AppMain }
  
}

</script>

<style lang="scss">
@use "./styles/general.scss";

body{
  background-color: rgba(0, 0, 0, 0.815);
}


</style>
