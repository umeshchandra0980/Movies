import React, { useState } from "react";
import "./Account.css";
import { FaUserCircle, FaSearch, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaUser} from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
export default function Account() {
    const [username] = useState("i");
    const [password] = useState("password");
    const [email, setEmail] = useState("");

    const AccountsProfilePage = () => {
      return (
      <main>
               
      <section className="box left-box">
          <div>
              <h2 className="box-title">ACCOUNT INFO</h2>
              <div className="content">Account Info</div>
          </div>
          <div>
              <h2 className="box-title">MY COMICS</h2>
              <div className="content">Upload Comics</div>
          </div>
      </section>

    
      <section className="box right-box">
          <h2 className="box-title">NAME & EMAIL</h2>
          <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                  <label htmlFor="username">USERNAME:</label>
                  <input
                      id="username"
                      type="text"
                      readOnly
                      value={username}
                      aria-label="Username"
                  />
              </div>
              <div className="form-row">
                  <label htmlFor="password">PASSWORD:</label>
                  <input
                      id="password"
                      type="password"
                      readOnly
                      value={password}
                      aria-label="Password"
                  />
              </div>
              <div className="form-row">
                  <label htmlFor="email">EMAIL ADDRESS:</label>
                  <input
                      id="email"
                      type="text"
                      placeholder="optional"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email Address"
                  />
              </div>
              <button type="submit">UPDATE ACCOUNT</button>
          </form>
      </section>
  </main>
      )
    }

    return (
        <div className="bodys">
           

            <header>
                <div className="containerss header-inner">
                    <div className="left">
                        <FaUser Circle />
                        <span></span>
                    </div>
                    <div className="center">Movies</div>
                    <div className="right">
                        <div className="text-block">
                            <div>ZEN UNLIMITED</div>
                            <div>VERSE</div>
                        </div>
                        <FaSearch />
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav>
                <ul className="containerss">
                    <li><Link to="/Home"> <a>Home</a></Link></li>
                    <li><Link to="/popular"> <a>Popular</a></Link></li>
                    <li><a href="/tvshows">Tvshows</a></li>
                    <li><a href="/wishlist">Whishlist</a></li>
                </ul>
            </nav>

            {/* Banner */}
            {/* <section className="banne">
                <img
                    src="https://via.placeholder.com/1440x250" // Placeholder image
                    alt="Comic banner"
                    width="1440"
                    height="250"
                />
                <h1>MyAccount</h1>
            </section> */}

            {/* Main content */}
         
            <div className="layoutwrap-a-1">
  <nav className="sidebar-b-2">
   
    <ul className="navlist-d-4">
      <li>
        <a href="#" className="active">
          <i className="fas fa-home"></i>
          <span>Profiles</span>

         
        </a>
        
      </li>
      
      <li>
        <a href="#">
          <i className="fas fa-credit-card"></i>
          <span>Membership</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-shield-alt"></i>
          <span>Security</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-tv"></i>
          <span>Devices</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-user-friends"></i>
        
          <span>Overview</span>
         
               
              
        </a>
      </li>
    
           
      
             
    </ul>
    
  </nav>
  
  <main className="maincontent-e-5">


    <section className="cardbox-g-7" aria-label="Membership details">
      
      <div className="cardbadge-h-8">Member since December 2021</div>
      <p className="plantitle-i-9">Standard plan</p>
      <p className="nextpay-j-10">Next payment: 6 September 2025</p>
      <div className="cardinfo-k-11">
        <img
          src="https://storage.googleapis.com/a1aa/image/96e5cea4-163a-4af3-f4bd-0058aca4d503.jpg"
          alt="Mastercard logo"
          width="24"
          height="16"
        />
        <span>•••• •••• •••• 3656</span>
      </div>
      <button className="managebtn-l-12" aria-label="Manage membership">
        Manage membership <i className="fas fa-chevron-right"></i>
      </button>
    </section>

   
  </main>
</div>



            {/* Footer */}
            {/* <footer>
                <div className="footer-container">
                    <div>
                        <h3>
                            <span>Comic</span>
                            <span>Verse</span>
                        </h3>
                        <p>
                            Your multiverse of epic comics, iconic characters & timeless stories. Dive into the bold, the bizarre, and the brilliant!
                        </p>
                    </div>
                    <div>
                        <h4>Explore</h4>
                        <ul>
                            <li>Home</li>
                            <li>Comics</li>
                            <li>Characters</li>
                            <li>Favourites</li>
                        </ul>
                    </div>
                    <div>
                        <h4>About</h4>
                        <ul>
                            <li>Our Mission</li>
                            <li>Creators</li>
                            <li>Contact</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    © 2025 ComicVerse. All rights reserved. Powered by fans, for fans.
                </div>
            </footer> */}
            <Footer/>
        </div>
    );
}


// export default function Account() {
//   return (
//     <>
//       <Header />
//       <Banner />
//       <main>
//         <LeftPanel />
//         <RightPanel />
//       </main>
//       <Footer />
//     </>
//   );
// }
