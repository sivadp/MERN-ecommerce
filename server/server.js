const express=require('express');
const app=express();
const cors=require('cors');
const makeConnectionToDb=require('./mongo');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{
    try{
        const documents=await makeConnectionToDb();
        res.json(documents);
    }
    catch(err){
        res.status(500).json({error:'an error occured while fatching image paths'});
    }
})

app.listen(3000);