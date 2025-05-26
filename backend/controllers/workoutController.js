const { default: mongoose } = require('mongoose')
const workoutModel = require('../models/workoutModel')


const getWorkouts = async (req,res) => {
    const workouts = await workoutModel.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    try {
        const workout = await workoutModel.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({erorr: error.message})
    }
    res.json({
        message: 'post a new workout'
    })
}

const getSingleWorkout = async (req,res) => {
    const { id }  = req.params
    if(!mongoose.isValidObjectId(id)){
        return  res.status(404).json({error: 'no such workout'})
    }
    const workout = await workoutModel.findById(id)
    if(!workout){
       return  res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}

const deleteSingleWorkout = async (req,res) => {
    const { id }  = req.params
    if(!mongoose.isValidObjectId(id)){
        return  res.status(404).json({error: 'no such workout'})
    }
    const workout = await workoutModel.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}

const updateWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return  res.status(404).json({error: 'no such workout'})
    }
    const workout = await workoutModel.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteSingleWorkout,
    updateWorkout
}