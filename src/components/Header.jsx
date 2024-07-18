import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import Avatar from "@mui/material/Avatar";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">welcome to spotify</div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="profile" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
