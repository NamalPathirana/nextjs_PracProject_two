import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";


const NewMeetup = () => {

    const addMeetupHandler = (enteredMeetupData) => {

    }

    return <Fragment>
        <NewMeetupForm onAddMeetup = {addMeetupHandler}></NewMeetupForm>
    </Fragment>
}


export default NewMeetup;