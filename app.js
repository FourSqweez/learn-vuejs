const CounterApp = {
  data() {
    return {
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: '40'
    }
  },
  methods: {
    changeTitle(){
      console.log('you click me')
    }
  }
}

Vue.createApp(CounterApp).mount('#counter')
