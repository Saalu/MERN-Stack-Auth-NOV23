// import User from "../models/userModels"
import Employee from '../models/employeeModel.js'


const employeeCtrl = {
 
create: async(req,res) => {
    const {employeeID, firstName,lastName, position, department,salary} = req.body
    try {
  
    const newEmployee = new Employee({
        employeeID:Math.floor(Math.random() * 300),
        firstName,
        lastName,
        position,
        department,
        salary: Math.floor(Math.random() * 10000)
    })

    const savedEmp = await newEmployee.save()
    res.json({
        status: 'success',
        msg: 'Create a new employee',
        result: savedEmp
    })
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},

getAll:async(req,res)=>{
    try {
    const employees = await Employee.find()

    res.json({
        status:true,
        length:employees.length, 
        result: employees
    })
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},
getOne:async(req,res)=>{
    try {
        const id = req.params.id
    const employee = await Employee.findById(id)

    res.json({
        status:true,
        // length:employees.length, 
        result: employee
    })
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},
deleteEmp:async(req,res)=>{
    try {
         const id = req.params.id
         await Employee.findByIdAndDelete(id)

    res.json({
        status:true,
        msg:'Deleted successfully', 
    })
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
},

updateEmp: async(req,res) =>{
    
    try {
    const {employeeID, firstName,lastName, position, department,salary} = req.body
    const id = req.params.id
    const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        {firstName,lastName, position, department,salary },
        {new:true}
        )

    res.json({
        status:true,
        msg:'updated successfully', 
        data: updatedEmployee
    }) 
} catch (err) {
    return res.status(500).json({msg: err.message})
}
}
}
export default employeeCtrl