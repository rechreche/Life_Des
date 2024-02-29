import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">LifeDesigners - Photographer</span>
          <h1>I will take photographs for you</h1>
          <div className="user">
            <img
              className="pp"
              src="\./photographers/photo2.jpeg"
              alt=""
            />
            <span>Ankush kumar</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="\./photographers/gig1.webp"
              alt=""
            />
            <img src="\./photographers/photographer.jpeg">

            </img>
            <img
              src="\./photographers/gig2.jpeg"
              alt=""
            />
            <img
              src="\./photographers/gig3.jpeg"
              alt=""
            />
          </Slider>
          <h2>About Him </h2>
          <p>
          Discover a visionary behind the lens, capturing moments that transcend time. 
          With an innate ability to blend artistry with technical precision, this photographer 
          brings stories to life through captivating imagery. Each photograph is a masterpiece, 
          meticulously crafted to evoke emotion and ignite the imagination. From breathtaking 
          landscapes to intimate portraits, this talent has an unparalleled ability for capturing 
          the essence of every subject. With a keen eye for detail and a passion for storytelling, 
          experience the world through this photographer's lens and discover the beauty that surrounds us.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="\./photographers/photo2.jpeg"
                alt=""
              />
              <div className="info">
                <span>Ankush kumar</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jan 2024</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                  <span className="desc">Hindi</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Ankush, I enjoy photography in my spare
                time. I have a lot of experience that
                means I know what to prompt the photograph with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="\./mehendi_tattoo/anshi.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Ansh Baranwal</span>
                  <div className="country">
                    <img
                      src="\./flags/india.png"
                      alt=""
                    />
                    <span>UP - India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Collaborating with my photographer has been an absolute pleasure. 
              They've set the bar high for professionalism and talent. 
              Throughout our project, communication was excellent, and they consistently 
              delivered outstanding work. Every day, they provided me with images that
               were open to adjustments, showing their commitment to meeting my needs. 
               Their ability to understand my vision and surpass my expectations was 
               truly remarkable. I highly recommend their services and look forward to 
               working with them again soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="\./photographers/sagar.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Sagar Kumar</span>
                  <div className="country">
                    <img
                      src="\./flags/india.png"
                      alt=""
                    />
                    <span>Haryana - India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="\./photographers/photo1.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Harsh Kesharwani </span>
                  <div className="country">
                    <img
                      src="\./flags/india.png"
                      alt=""
                    />
                    <span>Bihar - India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 printed image</h3>
            <h2>₹ 189.00</h2>
          </div>
          <p>
            I will create a unique high quality image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt poses</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
