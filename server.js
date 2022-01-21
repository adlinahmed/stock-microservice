
const express =  require('express')
const app = express()

const port = process.env.PORT || 2000

app.use(express.json())

const routers = require('./routes/stockRouter.js')
app.use('/stocks', routers)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})