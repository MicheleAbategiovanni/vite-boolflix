
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

body {
  background-color: rgb(27, 27, 27);
  height: 100vh;
}
</style>
