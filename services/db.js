// Node  + Mongodb connection
//  1. import mongoose
const mongoose = require('mongoose');


// connection string
mongoose.connect('mongodb://localhost:27017/EmployeeManagementSystem')


// Create  a model
const employee = mongoose.model('employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:String
})

module.exports={
    employee
}