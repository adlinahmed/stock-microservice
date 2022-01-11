
const express =  require('express')
const app = express()

// process.env.PORT || 2000
const port = 2000

app.use(express.json())

const routers = require('./routes/stockRouter.js')
app.use('/stocks', routers)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/stocks', (req, res) => {
//     // something to pull the getAllStocks route from the controller
// })
// app.get('/stocks/{id}', (req, res) => {
//     // something to pull the getOneStock route from the controller
// })

// app.post('/stocks', (req, res) => {
//     // something to 
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})