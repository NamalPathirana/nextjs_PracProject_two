import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

const MeetupDetails = (props) => {
  const data = props.meetupData;
  return (
    <MeetupDetail
      img={data.img}
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

  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {params:{meetupId:'m1'}};
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some street5, 1213 some city",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
