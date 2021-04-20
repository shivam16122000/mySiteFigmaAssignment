import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="avatar" style={{backgroundColor:"purple",color:"cyan"}}>S</Avatar>
        <h1 className="companyName">MYSITE</h1>
      </div>
      <div className="header-right">
        <Avatar className="avatarIcon"></Avatar>
        <h4 className="userName">Kishore</h4>
        <NotificationsNoneIcon className="notifyIcon" />
        <HelpOutlineIcon className="helpIcon" />
      </div>
    </div>
  );
}

export default Header;

