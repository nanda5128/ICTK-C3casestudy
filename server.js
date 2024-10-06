const express = require('express')
const itinerariesRouter = require('./routes/itineraryRoute')


const app = express()

const PORT=3000;

app.use(express.json())


app.use('/itineraries',itinerariesRouter)

app.get('/',(req,res)=>{
    res.send('From Hospital Itinerary API')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})