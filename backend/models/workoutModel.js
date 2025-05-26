const mongoose= require('mongoose')
const schema = mongoose.Schema

const workoutSchema = new schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
},{timestamps: true})//when we create a new doc it adds when it was created and updated etc

module.exports = mongoose.model('Workout',workoutSchema)
