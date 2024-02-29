import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Ankush",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">LifeDesigners</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Your Bookings</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Service Provider</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="\./img/user.jpeg"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Designers
                    </Link>
                    <Link className="link" to="/add">
                      Add New Designer
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
            Event Planners
            </Link>
            <Link className="link menuLink" to="/">
            Floral/Interior Designers
            </Link>
            <Link className="link menuLink" to="/">
              Mehendi/Tattoo Artists
            </Link>
            <Link className="link menuLink" to="/">
            Barbers/Makeup Artists
            </Link>
            <Link className="link menuLink" to="/">
            Electricians/Plumbers
            </Link>
            <Link className="link menuLink" to="/">
            Gardeners
            </Link>
            <Link className="link menuLink" to="/">
            Photographers
            </Link>
            <Link className="link menuLink" to="/">
            Automotive Mechanics
            </Link>
            <Link className="link menuLink" to="/">
            Carpenters/Welders
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
