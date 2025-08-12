import React, { useState } from 'react';
import './index.css';
import { Link, Navigate, replace, useNavigate } from 'react-router';
import Input from './Input';
import Cokkies from 'js-cookie'
import { useSearch } from '../Search/SearchProvider';


export default function Nav() {

  const { searchQuery, setSearchQuery } = useSearch();
  console.log('setSearchQuery:', setSearchQuery);

  console.log('searchQuery:', searchQuery);
  const navigate = useNavigate()
  const OnLogout = () => {
     Cokkies.remove('jwt_token')
     navigate("/login",{replace:true})
  }
 
    console.log("ppppp")
  return (
    <div className="nav-main">
        
      <div className="sec-con">
        <div>
          <img
            className="movies-img"
            src="https://res.cloudinary.com/dzrn93bir/image/upload/v1752054023/Copilot_20250709_150907_fur3jd.png"
            alt="Movies Logo"
          />
        </div>

        <div className="tags">
          <Link to="/home"  ><span className='nav-link'> Home</span></Link>
          <Link to="/popular"><span  className='nav-link'>Popular</span></Link>
          <Link to="/TvShows"><span  className='nav-link'> Tv shows</span></Link>
          <Link to="/Movies"><span  className='nav-link'> Movies</span></Link>
        </div>
      </div>

      <div className="nav-actions">
        <div className="search-container">

        <Input
           
          />
           {/* <p>Search Query: {searchQuery}</p> */}
          {/* <Link to="">   */}

        {/* <img
        src="https://cdn-icons-png.flaticon.com/512/622/622669.png" // clean 512px icon
        alt="search"
        className="netflix-search-icon"
      /> */}
       {/* </Link> */}
        </div>
        
        

        {/* <img
          className="avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User"
        /> */}
      
        <div class="profile-wrapper">
    <button class="profile-btn">
      <img src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-male-account-profile-worker-vector-picture-image_10398976.png" alt="Profile" />
    </button>

    <div class="dropdown-menu">
       
      <div class="profile-info">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User" />
        <span>GOLLA</span>
      </div>

   
      {/* <a href="#" class="dropdown-item">
        <img class="icon" src="https://img.icons8.com/ios-filled/50/ffffff/edit-user.png" alt="Manage" />
        Manage Profiles
      </a>

      <a href="#" class="dropdown-item">
        <img class="icon" src="https://img.icons8.com/ios-filled/50/ffffff/synchronize.png" alt="Transfer" />
        Transfer Profile
      </a> */}

      <a href="#" class="dropdown-item">
        <img class="icon" src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Account" />
        Account
      </a>

      {/* <a href="#" class="dropdown-item">
        <img class="icon" src="https://img.icons8.com/ios-filled/50/ffffff/help.png" alt="Help" />
        Help Centre
      </a> */}

      <div class="divider"></div>

      <div class="sign-out" onClick={OnLogout}>
        Log out
      </div>
    </div>
  </div>
      
        
      </div>
    </div>
  );
}
