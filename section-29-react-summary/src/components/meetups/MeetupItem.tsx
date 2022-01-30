
import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';

const MeetupItem = (props: { imgSrc: string, imgAlt: string, title: string, address: string, description: string }) => {
    return <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favourites</button>
            </div>
        </li>
    </Card>
}

export default MeetupItem;