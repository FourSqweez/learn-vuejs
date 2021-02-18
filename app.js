const CounterApp = {
  data() {
    return {
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
  },
}

Vue.createApp(CounterApp).mount('#counter')
