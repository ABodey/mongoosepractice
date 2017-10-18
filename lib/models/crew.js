const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const crewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateFound: Date,
    yearsInBusiness: Number,
    colors: [String],
    pirates:[{
        name: String,
        weapons: [String]
    }],
    homeBase: {
        island:String,
        bodyOfWater:{
            type: String,
            enum: [ 'Black Sea', 'Blue Sea', 'Green Sea', 'Gold Sea'],
            required: true
        } 
    },
    gold: {
        type: Number,
        min: 0,
        required: true
    }
});

module.exports = mongoose.model('Crew', crewSchema);



