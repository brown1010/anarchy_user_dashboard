import "./sidebar.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { BarChart, CleanHandsOutlined, DashboardOutlined, DocumentScannerOutlined, HelpOutline, MessageOutlined, PhotoOutlined, SettingsOutlined} from "@mui/icons-material";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src="https://storage.googleapis.com/anarchy-game-anarchy_1141183825/static/images/logo_with_glo.png" alt="" srcset="" />
          </span>
        </Link>
      </div>
      
      <div className="center">
        <ul>
          <p className="title">.</p>
          <li>
            <DashboardOutlined className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">.</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <BarChart className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerOutlined className="icon" />
              <span>Document</span>
            </li>
          </Link>
          <li>
            <PhotoOutlined className="icon" />
            <span>Photos</span>
          </li>
          <li>
            <CleanHandsOutlined className="icon" />
            <span>Hierarchy</span>
          </li>
          <p className="title">.</p>
          <li>
            <MessageOutlined className="icon" />
            <span>Message</span>
          </li>
          <li>
            <HelpOutline className="icon" />
            <span>Help</span>
          </li>
          <li>
            <SettingsOutlined className="icon" />
            <span>Settings</span>
          </li>
          
          <p className="title">.</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
