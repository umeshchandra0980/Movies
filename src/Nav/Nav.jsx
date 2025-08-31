import React, { useState } from 'react';
import './index.css';
import { Link, Navigate, replace, useNavigate } from 'react-router';
import Input from './Input';
import Cookies from 'js-cookie';
import { useSearch } from '../Search/SearchProvider';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Nav() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const OnLogout = () => {
    Cookies.remove('jwt_token');
    navigate("/login", { replace: true });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

        {/* Desktop Navigation */}
        <div className="tags desktop-nav">
          <Link to="/home"><span className='nav-link'> Home</span></Link>
          <Link to="/popular"><span className='nav-link'>Popular</span></Link>
          <Link to="/TvShows"><span className='nav-link'> TV Shows</span></Link>
          <Link to="/Movies"><span className='nav-link'> Movies</span></Link>
          <Link to="/WishList"><span className='nav-link'> Wishlist</span></Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-menu">
          <Link to="/home" onClick={closeMobileMenu}>
            <span className='nav-link mobile-nav-link'> Home</span>
          </Link>
          <Link to="/popular" onClick={closeMobileMenu}>
            <span className='nav-link mobile-nav-link'>Popular</span>
          </Link>
          <Link to="/TvShows" onClick={closeMobileMenu}>
            <span className='nav-link mobile-nav-link'> TV Shows</span>
          </Link>
          <Link to="/Movies" onClick={closeMobileMenu}>
            <span className='nav-link mobile-nav-link'> Movies</span>
          </Link>
          <Link to="/WishList" onClick={closeMobileMenu}>
            <span className='nav-link mobile-nav-link'> Wishlist</span>
          </Link>
        </div>
      </div>

      <div className="nav-actions">
        <div className="search-wrapper">
          <Input />
        </div>
        
        <div className="profile-wrapper">
          <button className="profile-btn">
            <img src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-male-account-profile-worker-vector-picture-image_10398976.png" alt="Profile" />
          </button>

          <div className="dropdown-menu">
            <div className="profile-info">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User" />
              <span>GOLLA</span>
            </div>

            <a href="/account" className="dropdown-item">
              <img className="icon" src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Account" />
              Account
            </a>

            <div className="divider"></div>

            <div className="sign-out" onClick={OnLogout}>
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}