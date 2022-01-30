import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

    const history = useHistory();
    
    const addMeetupHandler = (data: {
        title: string,
        image: string,
        address: string,
        description: string,
    }) => {
        fetch('https://react-getting-started-48366-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((res) => {
            console.warn('res: ', res);
            history.replace('/');
        }).catch(e => {
            console.error('error: ', e);
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
};

export default NewMeetupPage;