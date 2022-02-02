const cors = require('cors')

const express =  require('express')
const app = express()
const port = process.env.PORT || 2000

app.use(express.json())

const routers = require('./routes/stockRouter.js')
app.use('/stocks', routers)

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send('this is my stocks microservice')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})