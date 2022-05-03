import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
    return <Fragment>
        <Layout>
            <MeetupList></MeetupList>
        </Layout>
    </Fragment>
}

export default HomePage;