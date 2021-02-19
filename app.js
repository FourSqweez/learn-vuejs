const App = {
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: '40',
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title) {
      //this.title = 'new title'
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleMouseEvent(e, data) {
      console.log(e, e.type)
      data && console.log(data)
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
}

Vue.createApp(App).mount('#app')
