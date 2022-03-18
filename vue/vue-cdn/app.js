const app = Vue.createApp({
  data(){
    return {
      counter : 10,
    }
  },
  mounted: async function(){
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
  }
});
app.mount('#app')