import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const MOCK_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
]
const AllMeetupsPage = () => {

    const [isLoading, setLoading] = useState(true);
    const [meetupData, setData] = useState([]);

    useEffect(() => {
        console.warn("Fetch meetups");
        fetch('https://react-getting-started-48366-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((res) => {
            res.json().then(data => {
                setLoading(false);
                const dataArr: any = [];
                for(const key in data){
                    dataArr.push({
                        id: key,
                        ...data[key]
                    });
                }
                setData(dataArr);
            })
        }).catch(e => {
            console.error('error: ', e);
        });
    }, []);

    return <section>
        <h1>All Meetups</h1>
        {
            isLoading ? <p>Loading...</p> : <MeetupList data={meetupData} />
        }

    </section>
};

export default AllMeetupsPage;