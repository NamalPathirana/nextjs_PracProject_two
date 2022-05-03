import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {
  return (
    <MeetupDetails
    img = {"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"}
    title={'A first meetup'}
    address={"Some street5, 1213 some city"}
    description={"The meetup description"}
    ></MeetupDetails>
    <Fragment>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg/2560px-Canal_Grande_Chiesa_della_Salute_e_Dogana_dal_ponte_dell_Accademia.jpg"
      alt='A first meetup'
      />
      <h1>A First Meetup</h1>
      <address>Some street5, 1213 some city</address>
      <p>The meetup description</p>
    </Fragment>
  );
};

export default MeetupDetails;
