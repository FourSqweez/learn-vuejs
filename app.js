const CounterApp = {
  data() {
    return {
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: '40'
    }
  },
}

Vue.createApp(CounterApp).mount('#counter')
