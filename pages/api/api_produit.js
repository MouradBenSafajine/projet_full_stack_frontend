
import { connectToDatabase } from '../../util/db.js';

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();

  const collection = db.collection('produits');
  const documents = await collection.find({}).toArray();

  console.log(documents); // Check the console for the fetched data

  res.status(200).json(documents);
}