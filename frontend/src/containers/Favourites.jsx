import React from "react";
import FavCard from "../components/common/FavCard";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import ImgUnderline from "../assets/img/border-heading.svg"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFavourites } from "../reducks/favourites/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";

const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
      <>
    <Header />
    <div class="grid-row">
      <h3>Tourist Attractions in Europe</h3>
      <img src={ImgUnderline} alt="" />
    </div>
        <Search />
      <div class="figures">
        {favourites.map((favourite) => (
          <FavCard favourite={favourite} />
        ))}
      </div>
    <Footer />
    </>
);
};

export default Favourites;

{/* <div class="figures">
      <figure>
        <div class="like">
          <img src="img/fav-icon.svg" alt="" />
        </div>
        <img src="img/img-1.png" alt="" />
        <figcaption>
          <h6>Lauterbrunnen Valley</h6>
          <p>
            Like something straight out of The Sound of Music, the Lauterbrunnen
            Valley is endlessly picturesque
          </p>
        </figcaption>
      </figure> */}