const Question=require('../models/questions')
const Option=require('../models/options');
const { post } = require('../routes');

module.exports.create=async function(req,res){
//  in this the question are created
    console.log(req.url);
    console.log(req.body);
    let ques = await Question.create(req.body);
            
    

    console.log(ques);
    res.send(ques);



}

module.exports.deleteQues=async function(req,res){


    // in this the question will be deleted

    console.log("hi");
    let ques= await Question.findById(req.params.id)
                                .populate('options');

    let isVotes = false;

    console.log("hi1");
        
    if(ques){


        for(let option of ques.options){

            if(option.vote > 0){
                isVotes = true;
                break
            }
        }

        if (isVotes){

            res.send("options has votes for the ques you want to delete");


        }

        else{

            await Question.deleteOne({_id: req.params.id});

            await Option.deleteMany({question: req.params.id});

            res.send("ques deleted");
        }


        

        

    }
    //  if th at question of the given id does not exists then just sending a message
    else{
        res.send('question does not exists')
    }
}

module.exports.showDetails=async function(req,res){
    console.log(req.params.id)

    const ques=await Question.findById(req.params.id).populate('options')
    

    if(ques){
        res.send(ques);
    }
    // handling the bad requests if that id does not exist
    else{
        res.send("id does not exits");
    }



// in this the details about the question is displayed
}