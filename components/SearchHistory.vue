<template lang="pug">
  .search__history
    .search__item(
      v-for="(item, itemIndex) in boldItems"
      :key="item.population + item.header"
    )
      a.search__item-link(:href="getHref(itemIndex)" target="_blank")
        .search__item-text(v-html="getSearchedText(item)")
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      default() {
        return () => ''
      },
    },
    items: {
      type: Array,
      default() {
        return () => []
      },
    },
  },
  computed: {
    searchedElem() {
      return `<span style='color: #ef2134'>${this.inputValue}</span>`
    },
    boldItems() {
      const items = []
      this.items.forEach((item) => {
        items.push(Object.assign({}, item, {
          header: item.header.replace(this.inputValue.toLowerCase(), this.searchedElem).toLowerCase(),
        }))
      })
      return items
    },
  },
  methods: {
    getSearchedText(item) {
      return `${item.header} <span style="color: #6b6767e6;">(${item.country}, ${item.latitude} x ${item.longitude})</span>`
    },
    getHref(index) {
      return `https://yandex.ru/?q=${this.items[index].header}`
    },
  },
}
</script>
<style>
.search__history {
  width: 100%;
  margin: 10px auto;
  text-align: left;
}
.search__item {
  height: 25px;
  line-height: 25px;
  font-family: Arial;
  font-size: 13px;
  box-sizing: border-box;
  border-bottom: 1px dotted #ccc;
  padding: 0 5px;
  border-radius: 1px;
}
 .search__item:hover {
   cursor: pointer;
   background: #b5decb;
 }
 a.search__item-link {
   text-decoration: none;
   color: #000;
   opacity: .9;
 }
</style>
