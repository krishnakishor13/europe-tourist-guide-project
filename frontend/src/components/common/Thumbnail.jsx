import React,{useState, useEffect} from 'react'
import ImgLike from "../../assets/img/white-heart.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors'

const Thumbnail = ({place}) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
      dispatch(addFavourite(place));
    };
    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
      let favoritePlace = favourites.filter(
        (favourite) => favourite.id == place.id
      );
      if (favoritePlace.length > 0) {
        setShowLikeButton(false);
      }
    }, [favourites]);

    return (
        <div class="figures">
      <figure>
        <div class="like">
        <img src={ImgLike} onClick={() => {clickFavourite(place)}} alt="" />
        </div>
        <img src={place.image} alt="" />
        <figcaption>
          <h6>{place.name}</h6>
          <p>{place.time_to_travel}</p>
          <p>
            {place.description}
          </p>
        </figcaption>
      </figure>
      </div>
    );
}

export default Thumbnail