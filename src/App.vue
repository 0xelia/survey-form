<template>
<div class="h-screen flex justify-center items-center">
  <bgComp />
  <formComp />
</div>
</template>

<script>
import formComp from './components/formComp.vue';

export default {
  name: 'App',
  components: {
    formComp,
  },
}
</script>

<style>
#app {

}
</style>
