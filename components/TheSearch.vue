<template lang="pug">
  .search-wrapper
    SearchInput(
      :on-change="loadHints"
      :on-clear="clear"
    )
    SearchHistory(
      :input-value="inputValue"
      :items="searchHints"
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchInput from '~/components/SearchInput'
import SearchHistory from '~/components/SearchHistory'

export default {
  data() {
    return {
      inputValue: '',
    }
  },
  components: {
    SearchInput,
    SearchHistory,
  },
  computed: {
    ...mapGetters('search', ['searchHints']),
  },
  methods: {
    ...mapActions('search', ['loadSearchHints', 'clearHints']),

    loadHints({ value }) {
      this.inputValue = value
      this.loadSearchHints({ query: value })
    },
    clear() {
      this.clearHints()
      this.inputValue = ''
    },
  },
}
</script>
<style>
  .search {
    font-family: Arial;
  }
  .search-wrapper {
    width: 60%;
    text-align: center;
    margin: 50px auto;
    box-sizing: border-box;
  }
</style>
