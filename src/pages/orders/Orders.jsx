import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anshi",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="./mehendi_tattoo/henna.jpeg"
                alt=""
              />
            </td>
            <td>Stunning henna design</td>
            <td>500.<sup>00</sup></td>
            <td>Shreesha Baranwal</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="./EventPlanners/birthday.jpeg"
                alt=""
              />
            </td>
            <td>Organised a grand Birthday party</td>
            <td>6000.<sup>00</sup></td>
            <td>Rishu pratap singh</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="./photographers/wedding.jpeg"
                alt=""
              />
            </td>
            <td>High quality wedding photography</td>
            <td>2500.<sup>00</sup></td>
            <td>Trivedi Mendel</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="./Interior Designers/inter.webp"
                alt=""
              />
            </td>
            <td>Designed an modern Interior </td>
            <td>3000.<sup>00</sup></td>
            <td>Ambrish Yadav</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>

        </table>
      </div>
    </div>
  );
};

export default Orders;
