import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.scss';

const MeetupList = (props: { data: Array<any> }) => {
    return <ul className={classes.list}>
        {props.data.map((meetup) => {
            return <MeetupItem 
            key={meetup.id} 
            id={meetup.id} 
            image={meetup.image} 
            imgAlt=''
            title={meetup.title}
            description={meetup.description}
            address={meetup.address}></MeetupItem>
        })}
    </ul>
}

export default MeetupList;