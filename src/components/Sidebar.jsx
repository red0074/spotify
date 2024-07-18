import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDataLayerValue } from "./DataLayer";
import Buttons from "./Buttons";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      {/* <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      /> */}
      {/* options */}
      <div className="top__options">
        <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
        <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
      </div>
      <br />
      <div className="below__options">
        <div className="set1">
          <div className="set1__left">
            <SidebarOption title="Your Library" />
          </div>
          <div className="set1__right">
            <SidebarOption Icon={AddIcon} />
            <SidebarOption Icon={ArrowForwardIcon} />
          </div>
        </div>
        <div className="set2">
          <Buttons title="playlists" />
          <Buttons title="artists" />
          <Buttons title="albums" />
        </div>
        <div className="set3">
          {/* search */}
          <div className="search">
            <SearchIcon />
          </div>
          <div className="recent">
            <h4>Recent</h4>
            <MenuIcon />
          </div>
        </div>
        <div className="playlistbar">
          {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
