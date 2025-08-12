import React from "react";
import './Foo.css'; // Updated CSS file

function Footer() {
  return (
    <div className="footerwrap-a-1">
      <footer className="footbase-b-2">
        <div className="bottomnest-c-3">
          <div className="iconflex-d-4">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt="Facebook" />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v2.png"
                alt="TwitterX"
                className="socialglyph-g-7"
              />
            </a>
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png" alt="YouTube" />
          </div>

          <ul className="infoblock-e-5">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on OurSite</li>
          </ul>

          <div className="safeguard-f-6">
            <div>🌐 English</div>
            <span>© 2025 MovieWave, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
