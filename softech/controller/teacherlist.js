const database= require('../database/db')

const getTeacherList=async(req,res)=>{
    const db=await database.main();
        const collection= db.collection('teacher');
        const Result = await collection.find({}).toArray();
        res.send({
            status:200,
            message:Result
        })
    }

    module.exports={getTeacherList}