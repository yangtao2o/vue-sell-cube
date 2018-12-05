<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import qs from 'query-string'
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader
  }

}
</script>
<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
