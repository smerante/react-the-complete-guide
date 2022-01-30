import { createContext, useState } from "react";

export interface FavouriteContextI {
    favourites: Array<any>,
    totalFavourites: number,
    addFavourites: (favouriteMeetup: any) => void,
    removeFavouriteHandler:  (meetupID: any) => void,
    itemIsFavouriteHandler:  (meetupID: any) => boolean,
}

const initialContext: FavouriteContextI = {
    favourites: [],
    totalFavourites: 0,
    addFavourites:  (favouriteMeetup: any) => {},
    removeFavouriteHandler:  (meetupID: any) => {},
    itemIsFavouriteHandler:  (meetupID: any) => false,
};

export const FavouriteContext = createContext(initialContext);

const FavouritesContextProvider = (props: any) => {

    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetup: any) => {
        console.warn("adding to favourites: ", favouriteMeetup);
        setUserFavourites((prevState: any) => {
            return prevState.concat(favouriteMeetup);
        });
    }

    const removeFavouriteHandler = (meetupID: any) => {
        setUserFavourites((prevState: any) => {
            return prevState.filter((item: any) => item.id !== meetupID);
        });
    }

    const itemIsFavouriteHandler = (meetingID: any) => {
        return userFavourites.some((meetup: any) => meetup.id === meetingID);
    }

    const context: FavouriteContextI = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourites: addFavouriteHandler,
        removeFavouriteHandler: removeFavouriteHandler,
        itemIsFavouriteHandler: itemIsFavouriteHandler,
    };

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouritesContextProvider;