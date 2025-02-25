const express= require('express')
const database= require('../database/db')
const st=require('../controller/studentlist')
const router= express.Router();
const stnew=require('..//controller/teacherlist')


router.get('/getdata',st.getStudentList)
router.post('/insertData',st.postStudentList)
router.delete('/deleteData',st.deleteStudentList)
router.put('/updateData',st.updateStudentList)


router.get('/getteacherdata',stnew.getTeacherList)


module.exports=router
