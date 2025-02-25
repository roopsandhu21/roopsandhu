const database= require('../database/db')


const getStudentList=async(req,res)=>{
    const db=await database.main();
        const collection= db.collection('student');
        const findResult = await collection.find({}).toArray();
        res.send({
            status:200,
            message:findResult
        })
    }

const postStudentList=async(req,res)=>{
    try{
    const db=await database.main();
            const collection= db.collection('student');
            const result = await collection.insertOne(req.body);
            console.log(result)
                res.send({
                    status:200,
                    message:"record inserted successfully",
                    data:result
            })
        }
        catch(err)
        {
            res.send({
                message:"something went wrong,please try again later"+err,
                status: 500
            })
        }
    }
    const deleteStudentList=async(req,res)=>{
        try{
                const db=await database.main();
                const collection= db.collection('student');
                const result = await collection.deleteOne({name:req.query.name});
                console.log(result);
                if(result.deletedCount>0)
                {
                    res.send({
                        message:"",
                        status: 200,
                        data:"record deleted successfully"
                    })
                }
                else{ 
                    res.send({
                        message:"please try again later",
                    })
                }
            }
            catch(err) {
                res.send({
                    message:"something went wrong, please try again later" + err,
                    status: 500
                })
            }
        }
        const updateStudentList=async(req,res)=>{
            try{
                    const db=await database.main();
                    const collection= db.collection('student');
                    var newvalues= { $set: req.body};
                    const result = await collection.updateOne({name:req.query.name},newvalues);
                    console.log(result);
                    if(result.modifiedCount>0)
                    {
                        res.send({
                            message:"",
                            status:200,
                            data:"record updated successfully"
                        })
                    }
                    else{
                        res.send({
                            message:"please try again later",
                        })
                    }
            
                }
                catch(err) {
                    res.send({
                        message:"something went wrong, please try again later" + err,
                        status: 500
                    })
                }
        }

    module.exports={getStudentList,postStudentList,deleteStudentList,updateStudentList}