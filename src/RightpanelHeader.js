import React, { useState, useEffect } from "react";
import ReactTimeAgo from 'react-time-ago'
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import GridOnIcon from "@material-ui/icons/GridOn";
import SyncOutlinedIcon from "@material-ui/icons/SyncOutlined";
import "./RightpanelHeader.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function RightpanelHeader() {
  const [primitive, setPrimitive] = useState(1);
  const [obj1, setObj1] = useState({});
  const [obj2, setObj2] = useState({});
  const [time,setTime] = useState("15 minute ago");

  useEffect(() => {
    if (primitive == 1) {
      setObj1({
        color: "#76298d",
        fontWeight: "400",
        borderBottom: "5px solid #76298d",
      });
      setObj2({});
    } else if (primitive == 2) {
      setObj1({});
      setObj2({
        color: "#76298d",
        fontWeight: "400",
        borderBottom: "5px solid #76298d",
      });
    }
  }, [primitive]);

  const onclick1 = () => {
    setPrimitive(1);
  };
  const onclick2 = () => {
    setPrimitive(2);
  };
  const syncTime = ()=>{
    setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
  }

  return (
    <div className="rightpanelHeader">
      <div className="leftcomponent">
      <Link to="/" style={{ textDecoration: 'none' }}>  <div className="permission" style={obj1} onClick={onclick1}>
          <RssFeedOutlinedIcon className="icon" />
          <p>Permissions</p>
        </div></Link>
        <div className="vertical"></div>
       <Link to="/static" style={{ textDecoration: 'none' }}> <div className="matrix" style={obj2} onClick={onclick2}>
          <GridOnIcon className="icon" />
          <p>Approval Matrix</p>
        </div></Link>
      </div>
      <div className="rightcomponent">
        <div onClick={syncTime}><SyncOutlinedIcon className="icon" /></div>
        <p>Last synced {time}</p>
      </div>
    </div>
  );
}

export default RightpanelHeader;
