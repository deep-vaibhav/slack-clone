import React, { useEffect, useState } from "react";

import "./Sidebar.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //run this code ONCE when the sidebar loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  const addChannel = () => {
    const channelName = prompt("Enter the channel name ");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header ">
        <div className="sidebar_info">
          <h2>Vab's workspace</h2>
          <h3>
            <FiberManualRecordIcon className="dot" />
            {user?.displayName}
          </h3>
        </div>

        <CreateIcon className="create_icon" />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentiones & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />

      <div className="channel_header">
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <div onClick={addChannel}>
          <AddCircleOutlineIcon className="add_channel" />
        </div>
      </div>

      <hr />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
