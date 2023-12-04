<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button type="button" v-on:click="count++">Contador: {{ count }}</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
