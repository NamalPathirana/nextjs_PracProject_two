import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.img}
      title={props.title}
      address={props.address}
      description={props.description}
    ></MeetupDetail>
  );
};

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    meetupData: {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
      id: meetupId,
      title: "A first meetup",
      address: "Some street5, 1213 some city",
      description: "The meetup description",
    },
  };
}

export default MeetupDetails;
