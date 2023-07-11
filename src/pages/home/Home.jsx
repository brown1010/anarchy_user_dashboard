import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Add, AddCircleOutlineOutlined, ArrowDropDownOutlined, Filter, Filter1, FilterAlt, Sort } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="headingContainer">
        <div className="mainTitle">Users Dashboard</div>
          <div className="search">
            <input type="text" placeholder="" />
            <div className="searchIconGroup">

              <SearchOutlinedIcon className="searchIcon"/> Search
            </div>
            <button className="submit">Add user <Add className="add" /></button>
            <div className="sort">
              <p>Sort by <ArrowDropDownOutlined className="sortIcon"/></p>
              <div className="sortOption">Yearly</div>
            </div>

            <div className="sort">
              <p>Select Date <ArrowDropDownOutlined className="sortIcon"/> <Sort /></p>
              <div className="sortOption">01/01/2022-01/02/2023</div>
            </div>
          </div>
        </div>
        <div className="listContainer">
          
          <div className="listTitle">List Users</div>
          <Table />
        </div>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="document" />
          <Widget type="photo" />
          <Widget type="hierarchy" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 6 Months (New user registration)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
