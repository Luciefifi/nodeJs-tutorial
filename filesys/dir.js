const fs = require('fs')
if(!fs.existsSync('./new')){
    fs.mkdir('./new' ,(err)=>{
        if(err) throw err
        console.log('directory created !!!!')
        })
}
console.log('the directory already exist !!!!')

if(fs.existsSync ('./new'))
{
    fs.rmdir('./new'  , (err)=>{
        if(err) throw err
        console.log(" directory deleted !!!!")
    })
}


