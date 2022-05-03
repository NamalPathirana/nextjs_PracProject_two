import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";


const MeetupDetails = () => {
  return (
    <MeetupDetail
      img={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"
      }
      title={"A first meetup"}
      address={"Some street5, 1213 some city"}
      description={"The meetup description"}
    ></MeetupDetail>
  );
};

export async function getStaticProps(context){

  const meetupId = context.params.meetupId;

  return{
    meetupData:{
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg",

      id:'1',
      title:"A first meetup",
      address:"Some street5, 1213 some city",
      description:"The meetup description"
    }
  }

}

export default MeetupDetails;
