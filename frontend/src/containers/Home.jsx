import React,{useEffect} from 'react'
import Footer from '../components/common/Footer'
import GridContent from '../components/common/GridContent'
import Header from '../components/common/Header'
import Search from '../components/common/Search'
import ImgUnderline from "../assets/img/border-heading.svg"
import FooterSearch from "../assets/img/search-v.svg"
import Thumbnail from '../components/common/Thumbnail'
import ImgBackground from '../assets/img/banner-home.png'
import ImgLogo from '../assets/img/europian-logo.svg'
import ImgMenu from '../assets/img/menu-icon.svg'
import { getPlaces } from '../reducks/places/selectors'
import {getCategories} from '../reducks/categories/selectors'
import { fetchPlaces } from '../reducks/places/operations'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../reducks/categories/operations'
import { fetchFromLocalStorage } from '../reducks/favourites/operations'

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces())
  }, []);

  const categories = getCategories(selector)
  console.log(places);
  useEffect(() => {
   dispatch(fetchCategories());
   dispatch(fetchFromLocalStorage());
  }, []);

  return (
      <>
    <header>
    <div class="europa-logo">
      <img src={ImgLogo} alt="" />
    </div>
    <div class="menu">
      <a href="#">HOME</a>
      <a href="#">WONDERS IN EUROPE</a>
      <a href="#">TOURIST ATTRACTION</a>
      <a href="#">FAVOURITE</a>
    </div>
    <div class="menu-img">
      <img src={ImgMenu} alt="" />
    </div>
  </header>
  <section class="bg-img">
  <img src={ImgBackground} alt="" />
  <div class="bg-mask">
    <h2>Happiest Place on Earth!</h2>
    <Search />
    <input type="text" placeholder="search your destination &#128269;" />
  </div>
</section>
<div class="grid-row">
    <h3>Natural wonders in Europe</h3>
      <img src={ImgUnderline} alt="" />
    </div>
<div className="grid-images">
          {categories.map((category) => (
                <GridContent key={category.id} category={category} />
              ))}
          </div>
          <div class="grid-row">
      <h3>Tourist Attractions in Europe</h3>
      <img src={ImgUnderline} alt="" />
    </div>
    <div class="figures">
                    <figure>
                    {places.map((place) => (
                <Thumbnail place={place} />
              ))}
                    </figure>
                 </div>
                 <bottom-menu>
      <div class="bottom-menu-menu">
        <div class="menu-1">
          <ul>
            Quick Links
            <li>Home</li>
            <li>Things to do</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div class="menu-1">
          <ul>
            Address
            <li>14, 1 Ellis bridge ST,</li>
            <li>Auckland 3500, Ethiopia</li>
            <li>+15 9900 990 009</li>
            <li>contactus@ethiopia.com</li>
          </ul>
        </div>
      </div>
      <div class="para-bottom-menu">
        <p>
          Subscribe to our <br />
          News Letter
        </p>
        <div class="bottom-menu-search">
          <input type="text" placeholder="Your Email" />
          <img src={FooterSearch} alt="" />
        </div>
      </div>
    </bottom-menu>
    <Footer />
                 
</>
  );
  }

  export default Home