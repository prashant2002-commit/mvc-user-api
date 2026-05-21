const fs = require('fs')

function logReqRes(filename){
    return (req,res,next) => {
        fs.appendFile(filename, 'this is a log file from middleware \n',(err,res)=>{
            next();
        })
    }
}

module.exports = {
    logReqRes,    
}