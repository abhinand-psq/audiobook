
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abhinand:abhinand123@cluster0.ljjv9dl.mongodb.net/?retryWrites=true&w=majority";


const client =new MongoClient(uri)

const db={
    dbconnect:null
}


const connect =async (cb) =>{
       try {
    await client.connect();
   const dbs =  client.db('audio')
    db.dbconnect = dbs
cb()
  } catch(e) {
    cb(e)
  }

}

const get = () =>{
    return db.dbconnect
}

module.exports={
    connect,
    get
}
