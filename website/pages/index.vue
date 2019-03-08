<template>
  <main>
    <div class="hero">
      <h1 class="title">Haneru Developers</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

class IndexPage extends Vue {}

export default Component<IndexPage>({
  head() {
    const title = 'Haneru Developers'

    return {
      title
    }
  }
})(IndexPage)
</script>

<style scoped>
.hero {
  align-items: center;
  background-color: #222;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  font-family: Roboto Slab, serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.title {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
