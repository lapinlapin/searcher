<template lang="pug">
  div.search__container
    input.search__input(
      v-model.trim="searchText"
      @input="onChange({ value: searchText })"
      :placeholder="placeholderTitle"
    )
    .search__clear(@click="clear") ✖
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      placeholderTitle: 'Найдется все...',
    }
  },
  props: {
    onChange: {
      type: Function,
      default() {
        return () => {}
      },
    },
    onClear: {
      type: Function,
      default() {
        return () => {}
      },
    },
  },
  methods: {
    clear() {
      this.searchText = ''
      this.onClear()
    },
  },
}
</script>
<style>
  .search__container {
    position: relative;
  }
  .search__input {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    height: 35px;
    border: 2px solid #90bba7;
    border-radius: 1px;
    outline: none;
    font-size: 14px;
    color: #6b6767e6;
  }
  .search__clear {
    position: absolute;
    right: 9px;
    top: 9px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    opacity: .2;
  }
  .search__clear:hover {
    opacity: .7;
  }
</style>
