<template>
  <div class="products">
    <a
      v-for="product in values"
      :key="product.url"
      class="product"
      :href="product.url"
      rel="noreferrer noopener"
      target="_blank"
    >
      <img
        alt=""
        class="product__main-visual"
        height="630"
        :src="$withBase(product.image)"
        width="1200"
      />
      <div class="product__body">
        <h2 class="product__name">{{ product.name }}</h2>
        <p class="product__description">{{ product.description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      default() {
        return []
      },
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.products
  align-items stretch
  border-top 1px solid $borderColor
  display flex
  flex-wrap wrap
  justify-content space-between
  margin-top 2.5rem
  padding 2.5rem 0 5rem

.product
  border 1px solid $borderColor
  border-radius 6px
  color inherit
  display block
  flex-basis 32%
  flex-grow 1
  max-width 32%
  overflow: hidden
  text-decoration none
  transition background-color ease-in 0.2s

  &:hover
    background-color #fafafa

.product__main-visual
  display block
  height auto
  max-width 100%

.product__body
  border-top 1px solid $borderColor
  padding: 0.5rem

.product__name
  border 0
  font-size 1rem
  font-weight 700
  margin 0 0 0.5rem 0
  padding 0

.product__description
  font-size 0.8rem
  font-weight 400
  line-height 1.5
  margin 0
  padding 0

@media (max-width: $MQMobile)
  .products
    flex-direction column

  .product
    max-width 100%

  .product + .product
    margin-top 1.5rem
</style>
