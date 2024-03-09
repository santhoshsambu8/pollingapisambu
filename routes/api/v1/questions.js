
const express=require('express')
const Router=express.Router()
const question_controller=require('/Users/sambusanthosh/Desktop/pollingapi-main-sambu/controllers/QuestionsController.js');

Router.post('/create',question_controller.create);
Router.delete('/delete/:id',question_controller.deleteQues);

Router.get('/view/:id',question_controller.showDetails)





module.exports=Router