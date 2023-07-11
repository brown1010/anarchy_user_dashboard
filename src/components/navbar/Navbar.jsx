import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {
  ArrowDownwardOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="welcome">
          <h3>Hello, Admin</h3>
          <h5>Have a nice day</h5>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon pointer"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon pointer" />
            <div className="counter">1</div>
          </div>
          <div class="vertical-line"></div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar pointer"
            />
          </div>
          <div className="name">
            <h4>Khanif Alfan</h4>
            <h6>Admin</h6>
          </div>
          <div className="item">
            <ArrowDropDownOutlined className="icon pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
