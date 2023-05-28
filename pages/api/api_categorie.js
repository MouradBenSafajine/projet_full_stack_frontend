import { connectToDatabase } from '../../util/db';

export default async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const db = client.db(); // Access the default database
    const collection = db.collection('categories');
    const categories = await collection.find({}).toArray();
    res.status(200).json(categories);
  } catch (err) {
    console.log('Error fetching categories', err);
    res.status(500).json({ error: 'Error fetching categories' });
  }
}
