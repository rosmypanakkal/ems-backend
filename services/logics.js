// import db.js


const db=require('../services/db')
// logic for get all employees from the database
const getAllEmployees=()=>{
    return db.employee.find().then(
        (result)=>{
            // result->all employee details
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Employees not found'
                }
            }
        }
    )
}

// logic for add an employee to the database

const AddEmployees=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Employee already exist"
            }
        }
        else{
            // if id is not present in the db, to save all the data in db.

            const newEmployee=new db.employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added sucessfully..."
            }
        }
    })

}

// logic for delete an employee using id
const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((response)=>{
        return{
            statusCode:200,
            message:"employee deleted successfully "
        }
    })
    .catch((error)=>{
        return{
            statuscode:401,
            message:"Can't delete an employee from the database"
        }
    })
}
// logic gor get an employee from the database
const getAnEmployees = (id) =>{
    return db.employee.findOne({id}).then(
       (result)=>{
        if(result){
            return {
                statusCode : 200,
                employees:result
            }
        }

        else{
            return{
                statusCode:404,
                message:'employee not found'
            }    
            }
       }
    )
}

// logics for update an employee details
const updateEmployee=(id,name,age,designation,salary)=>{ //updated details
    return db.employee.findOne({id}).then(
        (result)=>{//result=>an employee details
         if(result){
            //assign to updated employee details to the mongodb object
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;


            // to save an employee details to mongodb
            result.save();
             return {//send to frondend
                 statusCode : 200,
                 employees:'Employee details updated successfully'
             }
         }
 
         else{
             return{
                 statusCode:404,
                 message:'employee not found'
             }    
             }
        }
     )

}


// for activating getAllEmployees
module.exports={
    getAllEmployees,
    AddEmployees,
    deleteEmployee,
    getAnEmployees,
    updateEmployee
}
