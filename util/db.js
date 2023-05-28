 "use client"
 import { MongoClient } from 'mongodb';

 // Connection details from environment variables
 const { MONGODB_URI } = process.env;
 
 let cachedClient = null;
 let cachedDb = null;
 
 export async function connectToDatabase() {
   if (cachedClient && cachedDb) {
     return { client: cachedClient, db: cachedDb };
   }
 
   const client = new MongoClient(MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
 
   await client.connect();
   const db = client.db();
 
   cachedClient = client;
   cachedDb = db;
 
   return { client, db };
 }
 