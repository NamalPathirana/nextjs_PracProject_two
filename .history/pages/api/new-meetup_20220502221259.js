import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://nextjs_deme:loop6@cluster0.wpwjb.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = meetupsCollection.insertOne(data);

    console.data(result);

    client.close();

    res.status(201).json(
        {message:'Meetup inserted!'}
    );

     
  }
}
