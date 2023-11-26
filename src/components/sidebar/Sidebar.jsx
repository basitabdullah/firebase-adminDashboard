import React, { useContext } from "react";
import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <Link to="/">
        <div className="top">
          <span className="logo">kreed</span>
        </div>
      </Link>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/">
          <li>
            <SpaceDashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>



          <p className="title">Lists</p>
          <Link to="/users">
            <li>
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">

          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>

          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <p className="title">Useful</p>

          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type : "LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type : "DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
