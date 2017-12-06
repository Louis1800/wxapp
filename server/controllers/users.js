module.exports = ctx => {
  ctx.state.data = {
    users:[
      {
        wid:"wx002154",
        nickname:"张三",
        booklist:["001"],
        cart:["000"]
      },
      {
        wid:"wx002154",
        nickname:"王五",
        booklist:["000","001"],
        cart:[]
      }
    ]  
  }
}