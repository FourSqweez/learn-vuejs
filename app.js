const Books = {
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: '40',
    }
  },
  methods: {
    changeTitle(title) {
      //this.title = 'new title'
      this.title = title
    },
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  },
}

Vue.createApp(Books).mount('#books')
