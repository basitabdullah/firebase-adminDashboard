import React from "react";
import "./featured.scss";
import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <MdMoreVert className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made Today</p>
        <h1 className="amount">$420</h1>
        <p className="desc">Last transactions made before 12am.As per rules.</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Today</div>
            <div className="itemResult negative">
              <IoMdArrowDropdown />
              <div className="resultAmount">12k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <IoMdArrowDropup />
              <div className="resultAmount">17k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle ">Last Month</div>
            <div className="itemResult positive">
              <IoMdArrowDropup />
              <div className="resultAmount">14k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featured;
