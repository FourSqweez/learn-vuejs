const CounterApp = {
  data() {
    return {
      title: 'Hi this is title',
      number: 0
    }
  },
}

Vue.createApp(CounterApp).mount('#counter')
