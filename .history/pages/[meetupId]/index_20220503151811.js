import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  const data = props.meetupData;
  console.log(data);
  return (
    <MeetupDetail
      img={data.image}
      title={data.title}
      address={data.address}
      description={data.description}
    ></MeetupDetail>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://nextjs_deme:loop6@cluster0.wpwjb.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  
  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return { params: { meetupId: meetup._id.toString() } };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  
  const client = await MongoClient.connect(
    "mongodb+srv://nextjs_deme:loop6@cluster0.wpwjb.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ "_id": ObjectId(meetupId)});

  // (error,results)=>{
  //   if(error){
  //    console.log(error);
  //   }
  //   else{
  //     console.log("no error");
  //     console.log(results);
  //   }
  //  }

  // const jsonStr = JSON.parse(selectedMeetup);
  console.log(selectedMeetup);

  return {
    props: {
      meetupData:{
        title:selectedMeetup.title,
        description:selectedMeetup.description,
        image:selectedMeetup.image,
        address:selectedMeetup.address,
        id:selectedMeetup._id.toString(),
      },
    },
  };
}

export default MeetupDetails;
