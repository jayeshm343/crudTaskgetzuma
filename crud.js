const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.json())

let arr = [
    {
        "name":"jayesh",
        "email":"mishra.jay18@mail.com"
    }
    
]

// app.use('*',(req,res,next)=>
// console.log(arr)
// next()
// )
app.get('/getData' ,async (req,res)=>{
    // let i = req.body.index
    try{
        res.status(200).send(arr)
    }
    catch(err){
        console.log(err)
        res.send('cant get data for index'+i)
    }
}
)

app.post('/createData',async (req,res)=>{
    let email = req.body.email,name = req.body.name
    try{
        
        arr.push({name:name,email:email})
        res.send('data created')
    }
    catch(err){
        console.log(err)
        res.send('error updating data for index'+i)
    }
}
)

app.post('/updateData',async (req,res)=>{
    let email = req.body.email,name = req.body.name
    try{
        let dataInd = arr.findIndex((data)=>{return data.name==name})

        arr[dataInd].email = email
        res.send('data updated')
    }
    catch(err){
        console.log(err)
        res.send('error updating data for index'+i)
    }
}
)

 app.post('/deleteData', async (req,res)=>{
    let name = req.body.name
    try{
         arr=arr.filter((data)=>{return data.name!=name})
        res.send('data deleted')
    }
    catch(err){
        console.log(err)
        res.send('error deleting data for index'+i)
    }
}
 )

app.listen(3000)