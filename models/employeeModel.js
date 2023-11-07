import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeID: {       
        type:String,
        required:true,
        unique:true
    },
    firstName: {     
        type:String,
        required:true
    },
    lastName: {     
        type:String,
        required:true
    },
   
    position: {    
        type:String,
        required:true
    }, 
    department: {    
        type:String,
        required:true
    }, 
    salary: {    
        type:Number,
        required:true
    }, 
},{timestamps:true})

const Employee = mongoose.model('employee', employeeSchema)

export default Employee