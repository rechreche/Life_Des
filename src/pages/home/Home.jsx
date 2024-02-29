import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Unlock a world of skilled talent at your doorstep.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right worker to begin working on your task within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality workers at every price point. No hourly rates,
              just task-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore what services we provide</h1>
          <div className="items">
            <div className="item">
              <img
                src="./logos/henna.png"
                alt=""
              />
              <div className="line"></div>
              <span>Mehendi Designs</span>
            </div>
            <div className="item">
              <img
                src="./logos/tatoo.png"
                alt=""
              />
              <div className="line"></div>

              <span>Tatoo ideas</span>
            </div>
            <div className="item">
              <img
                src="./logos/makeover.png"
                alt=""
              />
              <div className="line"></div>
              <span>Makeup Plans</span>
            </div>
            <div className="item">
              <img
                src="./logos/gardening.png"
                alt=""
              />
              <div className="line"></div>
              <span>Gardening plans</span>
            </div>
            <div className="item">
              <img
                src="./logos/photographer.png"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
            <div className="item">
              <img
                src="./logos/people.png"
                alt=""
              />
              <div className="line"></div>
              <span>Event plans</span>
            </div>
            <div className="item">
              <img
                src="./logos/painter.png"
                alt=""
              />
              <div className="line"></div>
              <span>Wall Painters</span>
            </div>
            <div className="item">
              <img
                src="./logos/plan.png"
                alt=""
              />
              <div className="line"></div>
              <span>Interior Designs</span>
            </div>
            <div className="item">
              <img
                src="./logos/flowers.png"
                alt=""
              />
              <div className="line"></div>
              <span>Flower Designs</span>
            </div>
            <div className="item">
              <img
                src="./logos/door.png"
                alt=""
              />
              <div className="line"></div>
              <span>Carpenting itmes</span>
            </div>
            <div className="item">
              <img
                src="./logos/mechanic.png"
                alt=""
              />
              <div className="line"></div>
              <span>Vehical Services</span>
            </div><div className="item">
              <img
                src="./logos/barber.png"
                alt=""
              />
              <div className="line"></div>
              <span>Hair Styles</span>
            </div>
            <div className="item">
              <img
                src="./logos/electrician.png"
                alt=""
              />
              <div className="line"></div>
              <span>Electric Services</span>
            </div>
            <div className="item">
              <img
                src="./logos/plumber.png"
                alt=""
              />
              <div className="line"></div>
              <span>Plumbing Services</span>
            </div>
            <div className="item">
              <img
                src="./logos/welder.png"
                alt=""
              />
              <div className="line"></div>
              <span>Welding Services</span>
            </div>
            <div className="item">
              <img
                src="./logos/catering.png"
                alt=""
              />
              <div className="line"></div>
              <span>Catering Plans</span>
            </div>
            <div className="item">
              <img
                src="./logos/tailor.png"
                alt=""
              />
              <div className="line"></div>
              <span>Fashion Designs</span>
            </div>
            <div className="item">
              <img
                src="./logos/laundry.png"
                alt=""
              />
              <div className="line"></div>
              <span>Laundry Services</span>
            </div>
            <div className="item">
              <img
                src="./logos/washing.png"
                alt=""
              />
              <div className="line"></div>
              <span>Home Cleaners</span>
            </div>
            <div className="item">
              <img
                src="./logos/workers.png"
                alt=""
              />
              <div className="line"></div>
              <span>Labourer Services</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              LifeDesigners <i>business</i>
            </h1>
            <h1>
              A perfect solution designed for <i>clients</i>
            </h1>
            <p>
            Elevate your experience with a tailored service filled with proficient and talented partners committed to your needs and ultimate satisfaction.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to working partners with proven working experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Match with the ideal candidate based on previous customer reviews and feedback to ensure the perfect fit
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Achieve optimal work-life balance and enhance productivity with the support of a competent and effective partners
            </div>
            <button>Explore LifeDesigners</button>
          </div>
          <div className="item">
            <img
              src="./logos/promote.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
