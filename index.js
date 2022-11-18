const express = require('express')


const app = express()

app.use(()=> {
    console.log('hello world')
})

app.listen (4000,() => console.log('server listening on 4000.......'))