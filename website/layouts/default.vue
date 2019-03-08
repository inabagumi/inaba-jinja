<template>
  <div>
    <Nuxt />

    <link
      as="style"
      href="https://fonts.googleapis.com/css?family=Roboto+Slab:700"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

class Layout extends Vue {}

export default Component<Layout>({
  head() {
    return {
      link: [
        {
          hid: 'favicon',
          href: '/favicon.png',
          rel: 'icon'
        }
      ]
    }
  }
})(Layout)
</script>

<style>
body {
  margin: 0;
}
</style>
