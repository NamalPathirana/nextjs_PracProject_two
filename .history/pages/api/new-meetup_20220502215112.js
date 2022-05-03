import {MongoClient} from 'mongodb';

function handler(req, req) {
  if (req === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect("mongodb+srv://nextjs_deme:loop6@cluster0.wpwjb.mongodb.net/meetups?retryWrites=true&w=majority");
     
  }
}
