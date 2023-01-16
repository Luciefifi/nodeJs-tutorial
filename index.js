
// const fsPromises = require("fs").promises
// const path =require("path")

// const fileOps = async () =>{
//     try{
        // const data = await fsPromises.readFile(path.join(__dirname , 'files' , 'starter.txt'), 'utf8')
        // console.log(data)
//         await fsPromises.writeFile(path.join(__dirname , 'files' , 'promiseWrite.txt'), "hello ")
//         await fsPromises.appendFile(path.join(__dirname , 'files' , 'promiseWrite.txt'), "\n nice to meet you")
//         await fsPromises.rename(path.join(__dirname , 'files' , 'newReply.txt'), path.join(__dirname , 'files' , 'newAStarter.txt'))
//         const newData =  await fsPromises.readFile(path.join(__dirname , 'files' , 'newAStarter.txt'), 'utf8')
//         console.log(newData)
       

//     }
//     catch(err){
//         console.error(err)
//     }
// }
// fileOps();

// fs.readFile( path.join(__dirname , 'files' , 'starter.txt'), 'utf8', (err , data)=> {
//     if(err)throw err
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname , "files" , 'reply.txt',) , " nice to meet you" , err =>{
//     if(err)throw err
//     console.log("write completed !!")

//     fs.appendFile(path.join(__dirname , "files", 'reply.txt'), " \n yes it is" , err=>{
//         if(err) throw err
//         console.log("append complete!!!")


//         fs.rename((path.join(__dirname , 'files' , 'reply.txt')) , path.join(__dirname , 'files' , 'newReply.txt') , err=>{
//             if(err) throw err
//             console.log("renaming complete!!!")

//     })
//     })
// })



// // exit on uncought error

// process.on("uncaughtException" , (err )=> {
//     console.log(`there was an uncought error : ${err}`)
//     process.exit(1)
// })


const {format } = require('date-fns')

const {v4:uuid} = require('uuid')
console.log(format(new Date() ,'yyyyMMMdd\tHH:mm:ss'))

console.log("hello!!")
console.log(uuid())
console.log()