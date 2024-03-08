const fs = require('fs')

const path="src/Assets/";

const timeStamp=Date.now().toString();
const date=new Date().toUTCString().slice(0,17);
const hours=new Date().getHours().toString();
const minutes=new Date().getMinutes().toString();
const seconds=new Date().getSeconds().toString();
const dateTime=`${date},${hours}-${minutes}-${seconds}`;

exports.readWriteFile = async (req,res) => {
    try { 
       fs.writeFileSync(`${path}/${dateTime}.txt`,`Current TimeStamp : ${timeStamp}`,"utf-8"); 
       let content = fs.readFileSync(`${path}/${dateTime}.txt`,'utf-8')
        res.status(200).send(`${content}`)
    } catch (error) {
        console.log(error);
          res.status(500).send({
            error
          })
    }
}