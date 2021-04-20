import React, { useState, useEffect } from "react";
import "./Leftpanel.css";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
function Leftpanel() {
  const [primitive, setPrimitive] = useState(3);
  const [obj1, setObj1] = useState({});
  const [obj2, setObj2] = useState({});
  const [obj3, setObj3] = useState({});

  useEffect(() => {
    if (primitive == 1) {
      setObj1({
        backgroundColor: "rgba(208,156,217,0.5)",
        color: "#76298d",
        fontWeight: "700",
        borderLeft: "5px solid #76298d",
      });
      setObj2({});
      setObj3({});
    } else if (primitive == 2) {
      setObj1({});
      setObj2({
        backgroundColor: "rgba(208,156,217,0.5)",
        color: "#76298d",
        fontWeight: "700",
        borderLeft: "5px solid #76298d",
      });
      setObj3({});
    } else if (primitive == 3) {
      setObj1({});
      setObj2({});
      setObj3({
        backgroundColor: "rgba(208,156,217,0.5)",
        color: "#76298d",
        fontWeight: "700",
        borderLeft: "5px solid #76298d",
      });
    }
  }, [primitive]);

  const onclick1 = () => {
    setPrimitive(1);
  };
  const onclick2 = () => {
    setPrimitive(2);
  };
  const onclick3 = () => {
    setPrimitive(3);
  };

  return (
    <div className="leftpanel">
      <div className="leftpanelItem" style={obj1} onClick={onclick1}>
        <DashboardOutlinedIcon className="icon" />
        <p>Projects</p>
      </div>
    <div className="leftpanelItem" style={obj2} onClick={onclick2}>
        <BusinessCenterOutlinedIcon className="icon" />
        <p>Organisation Profile</p>
      </div>
    <div className="leftpanelItem" style={obj3} onClick={onclick3}>
        <SecurityOutlinedIcon className="icon" />
        <p>Access Control</p>
      </div>
    </div>
  );
}

export default Leftpanel;
