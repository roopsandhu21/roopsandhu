const { MongoClient } = require('mongodb');

//const url = 'mongodb://localhost:27017';
const url='mongodb+srv://roop:simarsandhu21@cluster0.ucuto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(url);

const dbName = 'sample_mflix';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db =  await client.db(dbName);
    return db;
}


module.exports={main}