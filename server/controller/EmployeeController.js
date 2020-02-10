const controller = {};

const Employee = require('../model/Employee.js');

controller.getEmployee = async (req,res)=>{
    const employees = await Employee.find();
    res.json(employees);
}

controller.createEmployee = async (req,res)=>{
    const {name, position, office, salary}= req.body;

    const employee = {
        name,
        position,
        office,
        salary
    }

    const newEmployee =  new Employee(employee);
    await newEmployee.save();
    res.json({message:"employee created successfully"})
}

controller.getOneEmployee = async (req,res)=>{
    const {id}= req.params;
    const employee = await Employee.findById(id);
    res.json(employee)
}

controller.deleteEmployee = async (req,res)=>{
    const {id}= req.params;
    await Employee.findByIdAndDelete(id);
    res.json({message:"employee deleted"})
}


controller.updateEmployee = async  (req,res)=>{
    const {name, position, office, salary}= req.body;
    const {id}= req.params;
    const employee = {
        name,
        position,
        office,
        salary
    }
    
    await Employee.findByIdAndUpdate(id,{$set:employee});
    res.json({message:"employee updated"})
}



module.exports= controller;