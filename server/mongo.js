const MongoClient=require('mongodb').MongoClient;
 
async function makeConnectionToDb(){

    const uri='mongodb://localhost:27017/imagedb';
    let connection;
    try{
    connection= await MongoClient.connect(uri);
    const db =  connection.db();

    const documents= await db.collection('imagesData').find({},{ projection: {_id:0, imageData: 1 } }).toArray();
    
    return documents;

    }
    catch(e){
        console.log(e);
        return [];
    }
    finally{
        connection.close();
    }
}
 
module.exports=makeConnectionToDb;