<template>
  <div class="border-4 m-4 text-center">
    This header is a <strong>seperate</strong> Vue app
  </div>
</template>

<script>
export default {
  name: 'Header',
  created () {
    console.log('Header.vue loaded')
  }
}
</script>
