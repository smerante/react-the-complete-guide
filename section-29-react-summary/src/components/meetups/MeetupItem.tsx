
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { FavouriteContext, FavouriteContextI } from '../../store/favourites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';

const MeetupItem = (props: { id: string, image: any, imgAlt: string, title: string, address: string, description: string }) => {

    const context: FavouriteContextI = useContext(FavouriteContext);
    const itemIsFavourite = context.itemIsFavouriteHandler(props.id);

    const toggleFavouriteStatusHandler = () => {
        if (itemIsFavourite) {
            context.removeFavouriteHandler(props.id);
        } else {
            console.warn('Add to favourites: ', props);
            context.addFavourites({...props});
        }
    }

    return <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.imgAlt} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
            </div>
        </li>
    </Card>
}

export default MeetupItem;