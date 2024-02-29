import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Designer</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Event Planner</option>
              <option value="web">Mehendi Designer</option>
              <option value="animation">Interior Designer</option>
              <option value="music">Photographer</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to clients" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-past experience" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">response Time (e.g. 3 hours)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. Timeliness" />
            <input type="text" placeholder="e.g. Value for money" />
            <input type="text" placeholder="e.g. Trustworthy" />
            <input type="text" placeholder="e.g. Prompt Responsive" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
