const express = require('express')
const router=express.Router()

// FOR FILE HANDLING -fs MODULE
const fs = require('fs')

// Utility Functions For Reading from JSON file

const loadItineraries = ()=>{
    try {
        const dataBuffer = fs.readFileSync('itineraries.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)


        
    } catch (error) {
        console.log(error)
        return []
    }
}

// Utility Functions For Reading from JSON file

const saveItineraries = (itineraries)=>{
    try {
        const dataJSON = JSON.stringify(itineraries,null,2)
        fs.writeFileSync('itineraries.json',dataJSON)
        
    } catch (error) {
        console.log(error)
    }
    
}


// loads all itineraries
// localhost:3000/itineraries/
router.get('/',(req,res)=>{
    const itineraries = loadItineraries()
    res.send(itineraries)

})
// add a new itinerary
router.post('/',(req,res)=>{
    // fetch existing itineraries
    try {
        const itineraries = loadItineraries()
    const newItinerary = {
        name:req.body.name,
        patientCount:req.body.patientCount,
        hospitalLocation:req.body.hospitalLocation
    }
    itineraries.push(newItinerary)
    saveItineraries(itineraries)
    res.status(201).send(newItinerary)
        
  } catch (error) {
        res.status(400).send(error)
    }
    
})
module.exports = router;