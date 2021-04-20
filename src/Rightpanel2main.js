import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReactTimeAgo from 'react-time-ago'
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineSharpIcon from "@material-ui/icons/RemoveCircleOutlineSharp";
import "./Rightpanel2main.css";

function Rightpanel2main() {
  const summarstring = (dict) => {
    let s = "";
    if (dict["View"] == 1) {
      s = s + "View | ";
    }
    if (dict["Create"] == 1) {
      s = s + "Create | ";
    }
    if (dict["Edit"] == 1) {
      s = s + "Edit | ";
    }
    if (dict["Delete"] == 1) {
      s = s + "Delete";
    }

    if (s == "") {
      return "-";
    } else {
      if (s[s.length - 2] === "|") {
        s = s.slice(0, s.length - 2);
      }
      return s;
    }
  };

  const [levele, setLevele] = useState([
    "All Access",
    "Restricted Access",
    "Restricted Access",
    "Restricted Access",
    "All Access",
    "All Access",
  ]);
  const [summer, setSummer] = useState([
    { View: 1, Create: 1, Edit: 1, Delete: 1 },
    { View: 0, Create: 0, Edit: 0, Delete: 0 },
    { View: 1, Create: 1, Edit: 0, Delete: 0 },
    { View: 1, Create: 1, Edit: 0, Delete: 0 },
    { View: 1, Create: 1, Edit: 1, Delete: 0 },
    { View: 0, Create: 0, Edit: 0, Delete: 0 },
  ]);
  const [count, setCount] = useState(0);

  const [summar0, setSummar0] = useState(summarstring(summer[0]));
  const [summar1, setSummar1] = useState(summarstring(summer[1]));
  const [summar2, setSummar2] = useState(summarstring(summer[2]));
  const [summar3, setSummar3] = useState(summarstring(summer[3]));
  const [summar4, setSummar4] = useState(summarstring(summer[4]));
  const [summar5, setSummar5] = useState(summarstring(summer[5]));

  const onLeveleChange = (index, val) => {
    let newarr = [...levele];
    newarr[index] = val;
    setLevele(newarr);
  };

  const onSummarChange = (index, dict) => {
    let newarr = [...summer];
    newarr[index] = {
      ...newarr[index],
      View: dict["View"],
      Create: dict["Create"],
      Edit: dict["Edit"],
      Delete: dict["Delete"],
    };
    setSummer([...newarr]);
  };

  useEffect(() => {
    setSummar0(summarstring(summer[0]));
    setSummar1(summarstring(summer[1]));
    setSummar2(summarstring(summer[2]));
    setSummar3(summarstring(summer[3]));
    setSummar4(summarstring(summer[4]));
    setSummar5(summarstring(summer[5]));
  }, [summer]);

  const toggleOn = (
    <ToggleOnIcon className="toggleon" style={{ color: "rgb(92, 175, 92)" }} />
  );
  const toggleOf = (
    <ToggleOffIcon className="toggleof" style={{ color: "lightgray" }} />
  );

  const [primitive, setPrimitive] = useState(1);
  const [obj1, setObj1] = useState({});
  const [obj2, setObj2] = useState({});

  useEffect(() => {
    if (primitive == 1) {
      setObj1({ color: "#76298d", borderBottom: "4px solid #76298d" });
      setObj2({});
    } else if (primitive == 2) {
      setObj1({});
      setObj2({ color: "#76298d", borderBottom: "4px solid #76298d" });
    }
  }, [primitive]);

  const onclick1 = () => {
    setPrimitive(1);
  };
  const onclick2 = () => {
    setPrimitive(2);
  };

  return (
    <div className="rightpanel2main">
      <div className="managementTeam">
        <ArrowBackIcon className="arrowicon" />
        <p className="text">Management Team</p>
        <EditOutlinedIcon className="editicon" />
      </div>
      <div className="accesscontrol">
        <div className="one" style={obj1} onClick={onclick1}>
          Access Control
        </div>
        <div className="vertical"></div>
        <div className="two" style={obj2} onClick={onclick2}>
          Assigned Members
        </div>
      </div>
      <div className="table">
        <div className="tableheader">
          <p>Department/Role Name</p>
          <p>Access Level</p>
          <p>No of Members</p>
          <p>Last Updated </p>
        </div>
        <Tableitem
          count={count}
          name="Budget"
          level={levele[0]}
          onlevelChange={onLeveleChange}
          index="0"
          summarobj={summer[0]}
          summary={summar0}
          onsummarChange={onSummarChange}
          ke="1"
          tog={toggleOn}
        />
        <Tableitem
          count={count}
          name="Bidding"
          level={levele[1]}
          onlevelChange={onLeveleChange}
          index="1"
          summarobj={summer[1]}
          summary={summar1}
          onsummarChange={onSummarChange}
          ke="0"
          tog={toggleOf}
        />
        <Tableitem
          count={count}
          name="Vendor Portal"
          level={levele[2]}
          onlevelChange={onLeveleChange}
          index="2"
          summarobj={summer[2]}
          summary={summar2}
          onsummarChange={onSummarChange}
          ke="1"
          tog={toggleOn}
        />
        <Tableitem
          count={count}
          name="Purchase/Work Order"
          level={levele[3]}
          onlevelChange={onLeveleChange}
          index="3"
          summarobj={summer[3]}
          summary={summar3}
          onsummarChange={onSummarChange}
          ke="1"
          tog={toggleOn}
        />
        <Tableitem
          count={count}
          name="Organisational Profile"
          level={levele[4]}
          onlevelChange={onLeveleChange}
          index="4"
          summarobj={summer[4]}
          summary={summar4}
          onsummarChange={onSummarChange}
          ke="1"
          tog={toggleOn}
        />
        <Tableitem
          count={count}
          name="Permissions/Access Control"
          level={levele[5]}
          onlevelChange={onLeveleChange}
          index="5"
          summarobj={summer[5]}
          summary={summar5}
          onsummarChange={onSummarChange}
          ke="0"
          tog={toggleOf}
        />
      </div>
      <div>
        <br />
      </div>
    </div>
  );
}

export default Rightpanel2main;

function Tableitem({
  count,
  name,
  level,
  onlevelChange,
  index,
  summarobj,
  summary,
  onsummarChange,
  ke,
  tog,
}) {
  // console.log(`summary${index} is: ${summary}`);
  const [clas, setClas] = useState("accessg");
  const [time,setTime] = useState("1 minute ago");
  // const n = summary.length;

  const addon = <AddCircleOutlineIcon className="addcircle" />;
  const addof = <RemoveCircleOutlineSharpIcon className="addcircle" />;
  const toggleOn = (
    <ToggleOnIcon className="toggleon" style={{ color: "rgb(92, 175, 92)" }} />
  );
  const toggleOf = (
    <ToggleOffIcon className="toggleof" style={{ color: "lightgray" }} />
  );

  const [toggle, setToggle] = useState([tog, ke]);
  const [insert, setInsert] = useState([addon, "1"]);

  const [access, setAccess] = useState(level);
  const [crud, setCrud] = useState(summary);

  const toggleChange = () => {
    if (toggle[1] == "1") {
      setToggle([toggleOf, "0"]);
      setAccess("No Access");
      setCrud("-");
    } else if (toggle[1] == "0") {
      setToggle([toggleOn, "1"]);
      setAccess(level);
      setCrud(summary);
      console.log(`crud is ${crud}`);
    }
  };

  useEffect(() => {
    if (access == "Restricted Access") {
      setClas("accessr");
    } else if (access == "All Access") {
      setClas("accessgreen");
    } else if (access == "No Access") {
      setClas("accessgray");
    }
  }, [access]);

  useEffect(() => {
    if (ke == "0") {
      setAccess("No Access");
      setCrud("-");
    }
  }, [ke]);

  const changeAdd = () => {
    if (insert[1] == "1") {
      setInsert([addof, "0"]);
    } else {
      setInsert([addon, "1"]);
      let dictionary = { View: 1, Create: 1, Edit: 1, Delete: 1 };

      isview ? (dictionary["View"] = 1) : (dictionary["View"] = 0);
      iscreate ? (dictionary["Create"] = 1) : (dictionary["Create"] = 0);
      isedit ? (dictionary["Edit"] = 1) : (dictionary["Edit"] = 0);
      isdelete ? (dictionary["Delete"] = 1) : (dictionary["Delete"] = 0);
      console.log(
        `dictionary: View: ${dictionary["View"]},Create : ${dictionary["Create"]},Edit : ${dictionary["Edit"]},Delete: ${dictionary["Delete"]}`
      );

      onsummarChange(index, dictionary);
      setCrud(summary);
    }
  };

  useEffect(() => {
    setCrud(summary);
  }, [summary]);
  const radioChange = (e) => {
    setAccess(e.target.value);
    onlevelChange(index, e.target.value);
    if (toggle[1] === "0") {
      setToggle([toggleOn, "1"]);
    }
  };

  const [isview, setIsview] = useState(false);
  const [iscreate, setIscreate] = useState(false);
  const [isedit, setIsedit] = useState(false);
  const [isdelete, setIsdelete] = useState(false);

  const [isall, setIsall] = useState(false);
  const [isres, setIsres] = useState(false);

  useEffect(() => {
    if (summarobj["View"] == 1) {
      setIsview(true);
    }
    if (summarobj["Edit"] == 1) {
      setIsedit(true);
    }
    if (summarobj["Create"] == 1) {
      setIscreate(true);
    }
    if (summarobj["Delete"] == 1) {
      setIsdelete(true);
    }
    
  }, [summarobj]);

  useEffect(() => {
    if (access == "Restricted Access") {
      setIsres(true);
      setIsall(false);
    } else if (access == "All Access") {
      setIsres(false);
      setIsall(true);
      setIsview(true);
      setIscreate(true);
      setIsedit(true);
      setIsdelete(true);
    } else if (access == "No Access") {
      setIsres(false);
      setIsall(false);
      setIsview(false);
      setIscreate(false);
      setIsedit(false);
      setIsdelete(false);
    }
    
  }, [access]);

 /* useEffect(()=>{
    if(!isview || !iscreate || !isdelete || !isedit){
      setIsres(true);
      setIsall(false);
    }
   
     
  },[isview,isedit,iscreate,isdelete]);*/

 

  const onViewChange = (e) => {
    setIsview(e.target.checked);
    if(!e.target.checked){
      setIsres(true);
      setAccess("Restricted Access");
      setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
    }
  };

  const onCreateChange = (e) => {
    setIscreate(e.target.checked);
    if(!e.target.checked){
      setIsres(true);
      setAccess("Restricted Access");
      setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
    }
  };

  const onEditChange = (e) => {
    setIsedit(e.target.checked);
    if(!e.target.checked){
      setIsres(true);
      setAccess("Restricted Access");
      setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
    }
  };

  const onDeleteChange = (e) => {
    setIsdelete(e.target.checked);
    if(!e.target.checked){
      setIsres(true);
      setAccess("Restricted Access");
      setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
    }
  };

  const onAccessChange = (e) =>{
    setTime(<ReactTimeAgo date={new Date()} locale="en-US"/>);
  }

  if (insert[1] == "1") {
    return (
      <div className="tableitem">
        <div className="department">
          <div onClick={changeAdd}> {insert[0]}</div>
          <p>{name}</p>
        </div>
        <div className={clas}>{access}</div>
        <div className="summary">{crud}</div>
        <div className="lastupdated">
          <p>{time}</p>
          <div onClick={toggleChange}>{toggle[0]}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tableitem2">
        <div className="department">
          <div onClick={changeAdd}> {insert[0]}</div>
          <p>{name}</p>
        </div>
        <p>All aspects in the {name} module</p>
        <div className="selection">
          <div className="radiotab">
            <p>Access Control</p>
            <div className="radioselect" onChange={radioChange}>
              <div className="radioselect1">
                <input
                  type="radio"
                  value="All Access"
                  name="access"
                  checked={isall}
                  onChange={onAccessChange}
                />
                <div className="radioread">
                  <h5>All Access</h5>
                  <p>Can access all items</p>
                </div>
              </div>
              <div className="radioselect2">
                <input
                  type="radio"
                  value="Restricted Access"
                  name="access"
                  checked={isres}
                  onChange={onAccessChange}
                />
                <div className="radioread">
                  <h5>Restricted Access</h5>
                  <p>Can access only assigned in created items</p>
                </div>
              </div>
            </div>
          </div>
          <div className="checkboxtab">
            <p>Permissions</p>
            <div className="checkboxselect">
              <div>
                <input
                  type="checkbox"
                  value="View"
                  name="permit"
                  checked={isview}
                  onChange={onViewChange}
                />
                <p>View items in access</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Edit"
                  name="permit"
                  checked={isedit}
                  onChange={onEditChange}
                />
                <p>Edit items in access</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Create"
                  name="permit"
                  checked={iscreate}
                  onChange={onCreateChange}
                />
                <p>Create items in access</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Delete"
                  name="permit"
                  checked={isdelete}
                  onChange={onDeleteChange}
                />
                <p>Delete items in access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
