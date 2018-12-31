<template>
  <div class="home">
    <Quiz msg="And now, your highness..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'

export default {
  name: 'home',
  components: {
    Quiz
  }
}
</script>

<style lang="scss">

</style>
