const express = require('express')
const indexRouter=require('./Router/index')
const app = express();
app.use(express.json())
// hello world how r you
app.use('/',indexRouter)
app.listen(3000, () => {
    console.log("server started on port 3000")
})
