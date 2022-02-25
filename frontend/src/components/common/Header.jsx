import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'; 
import ImgLogo from '../../assets/img/europian-logo.svg'
import ImgMenu from '../../assets/img/menu-icon.svg'

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header>
        <div onClick={() => dispatch(push("/"))} class="europa-logo">
            <img src={ImgLogo} alt="" />
        </div>
        <div class="menu">
          <a href="#">HOME</a>
          <a href="#">WONDERS IN EUROPE</a>
          <a href="#">TOURIST ATTRACTION</a>
          <a href="#">FAVOURITE</a>
        </div>
        <div onClick={() => dispatch(push("/favourites"))} class="menu-img">
            <img src={ImgMenu} alt="" />
        </div>
      </header>
    );
}

export default Header
