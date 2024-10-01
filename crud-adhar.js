const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(8080, ()=>{
    console.log(`Server started on port: 8080`);
    
});

async function mongoDBConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/adhar_database");
        console.log("Connection is successful"); 
    } catch (error) {
        console.log(error);
    } 
}
mongoDBConnection();

const adharSchema = new mongoose.Schema({
    adharNo: {type: Number},
    fullName: {type: String },
    isMarried: {type: Boolean},
    city: {type: String },
    pin: {type: Number},
    country: {type: String },
},
{collection: "adhar_collection"});

const Adhar = mongoose.model("adhar", adharSchema);

app.get('/allAdhar', async (request, response) => { 
    console.log("Fetching adhar data from mongodb... ");
    console.log(`Request path: ${request.url}`);
    
    // Fetch all adhar using fetch({})
    const adharData = await Adhar.find({});
    return response.status(200).json(adharData);
});
