const constData = require('./function');

exports.controller=(req,res,action)=>{
    try{
        const controller_obj = require('./functions/'+constData[action].controller);
        eval(controller_obj[constData[action].function](req,res))
    }
    catch(err){
        console.log(err)
    }
}