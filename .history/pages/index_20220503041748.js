import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
    address: "Some address 5, 1234 some city",
    description: "This is a first meet up",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
    address: "Some address 5, 1234 some city",
    description: "This is a first meet up",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",
    address: "Some address 5, 1234 some city",
    description: "This is a first meet up",
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS,
//       revalidate:1,
//     }
//   }
// }

export default HomePage;
