const App = {
  data() {
    return {
      url: 'http://www.google.com',
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'the way kings',
          author: 'Brandon Sanderson',
          img: 'assets/3.jpg',
          isFav: true,
        },
      ],
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
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
}

Vue.createApp(App).mount('#app')
