import React from 'react'
import ImgLike from '../../assets/img/fav-icon.svg'
import Favourites from '../../containers/Favourites'

import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../reducks/favourites/operations'

const FavCard = ({favourite}) => {
    const dispatch = useDispatch()

    return (
        <div class="figures">
      <figure>
        <div class="like">
        <img src={ImgLike} onClick={() => dispatch(deleteFavourite(favourite.id))} alt="" />
        </div>
        <img src={favourite.image} alt="" />
        <figcaption>
          <h6>{favourite.name}</h6>
          <p>{favourite.time_to_travel}</p>
          <p>
            {favourite.description}
          </p>
        </figcaption>
      </figure>
      </div>
    )
}

export default FavCard