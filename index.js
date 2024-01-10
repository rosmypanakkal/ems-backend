//1. import express

const express =require('express')

// 2. import cors

const cors =require('cors')
const logic =require('./services/logics')

// 3. create an application usinf express

const emsServer = express()

//4.using cors to connect frontend port

emsServer.use(cors({
    origin:'http://localhost:3000'
}))

//5. create a middleware for parsing json data
emsServer.use(express.json())

// 6.define a port number
emsServer.listen(8000,()=>{
    console.log("emsserver listening on the port 8000");
})

// 7. api call for get All Employee details localhost:8000/get-all-employees
emsServer.get('/get-all-employees',(req,res)=>{
            //  logic ->function :getAllEmployees()
            logic.getAllEmployees().then((response)=>{
                res.status(response.statusCode).json(response)
            })
        })

// 8. api call for add An Employee details localhost:8000/add-employees
emsServer.post('/add-employee',(req,res)=>{
    logic.AddEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// 9.api call for delete an employee-localhost:8000/delete-employee
emsServer.delete('/delete-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// 10. api call for get An Employee details localhost:8000/get-all-employees
emsServer.get('/get-an-employees/:id',(req,res)=>{
    //  logic ->function :getAllEmployees()
    logic.getAnEmployees(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// 11. api call for update An Employee details localhost:8000/get-all-employees
emsServer.post('/update-an-employee/:id',(req,res)=>{
    //  logic ->function :updateEmployees()
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})