import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
      const response = await fetch("/api/new-meetup",{
          method:'POST',
          body:JSON.stringify(enteredMeetupData),
          header:{
              'Content-Type':'application/json'
          }
      });

      const data = await response.json();
      console.log(data);
  };

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
  );
};

export default NewMeetup;
