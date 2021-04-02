const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
