import { useContext } from "react";
import { Link } from "react-router-dom";
import MeetupList from "../components/meetups/MeetupList";
import { FavouriteContext, FavouriteContextI } from "../store/favourites-context";

const FavouritesPage = () => {

    const context: FavouriteContextI = useContext(FavouriteContext);
    let content;
    if (context.totalFavourites === 0) {
        content = <p>
            You have no favourites yet. Add favourites fom <Link to="/">Home</Link>
        </p>
    } else {
        content = <MeetupList data={context.favourites} />; 
    }

    return content
};

export default FavouritesPage;