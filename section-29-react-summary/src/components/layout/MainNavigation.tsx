
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../../store/favourites-context";
import classes  from './MainNavigation.module.scss';

const MainNavigation = () => {

    const context = useContext(FavouriteContext);

    return <header className={classes.header}>
        <div className={classes.logo}>
            React Meetups
        </div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/new-meetup'>New Meetup</Link></li>
                <li><Link to='/favourites'>Favourites <span className={classes.badge}>{context.totalFavourites}</span></Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;