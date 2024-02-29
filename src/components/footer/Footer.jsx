import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Event Planners</span>
            <span>Floral/Interior Designers</span>
            <span>Mehendi/Tattoo Artists</span>
            <span>Barbers/Makeup Artists</span>
            <span>Electricians/Plumbers</span>
            <span>Gardeners</span>
            <span>Photographers</span>
            <span>Automotive Mechanics</span>
            <span>Carpenters/Welders</span>
            <span>Caterers</span>
            <span>Tailors/Fashion Designers</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on LifeDesigners</span>
            <span>Buying on LifeDesigners</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Partner</span>
            <span>Community Standards</span>
          </div> 
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>LifeDesigners.</h2>
            <span>©LifeDesigners</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English/Hindi</span>
            </div>
            {/* <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div> */}
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
