import React, { useState, useEffect } from "react";
import "./Rightpanelmain.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function Rightpanelmain() {
  return (
    <div className="rightpanelmain">
      <div className="rolemanager">
        <div className="addrole">
          <AddOutlinedIcon className="addicon" />
          <p>Add Role</p>{" "}
        </div>
        <EditOutlinedIcon className="editicon" />
        <DeleteOutlinedIcon className="deleteicon" />
      </div>
      <div className="table">
        <div className="tableheader">
          <p>Department/Role Name</p>
          <p>Access Level</p>
          <p>No of Members</p>
          <p>Last Updated </p>
        </div>
        <Tableitem name="Management Team" level="All Access" member="4" />
        <Tableitem
          name="Procurement Team"
          level="Restricted Access"
          member="8"
        />
        <Tableitem name="Project Team" level="Restricted Access" member="16" />
        <Tableitem name="IT Team" level="Restricted Access" member="4" />
        <Tableitem name="Super Admin" level="All Access" member="1" />
      </div>
    </div>
  );
}

function Tableitem({ name, level, member }) {
  const [clas, setClas] = useState("accessg");
  useEffect(() => {
    if (level == "Restricted Access") {
      setClas("accessr");
    }
  });

  return (
    <div className="tableitem">
      <div className="department">
        <RadioButtonUncheckedOutlinedIcon className="radiobutton" />
        <p>{name}</p>
      </div>
      <div className={clas}>{level}</div>
      <div className="membercount">{member}</div>
      <div className="lastupdated">
        <p>1 min ago</p>
        <VisibilityOutlinedIcon className="visibilityicon" />
      </div>
    </div>
  );
}

export default Rightpanelmain;
