import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function Notification({ notification, avatar, unread }) {
  function buildMessage() {
    let builtNotification = "";
    let sender = "" + notification.sender;
    console.log(sender);
    let activity = notification.activity;
    let message = notification.message;
    let group = notification.group;
    let pm = notification.pm;
    let picture = notification.picture;
    let timestamp = notification.timestamp;

    if (sender != null && sender.length > 0) {
      builtNotification =
        activity.length > 0 ? (
          <div className="content">
            <div className="">
              <span className="sender">{sender} </span>
              <span className="activity">{activity} </span>
              {group != null && group.length > 0 && (
                <span className="group">{group} </span>
              )}
              {message != null && message.length > 0 && (
                <span className="message">{message} </span>
              )}

              <p className="timestamp">{timestamp}</p>
              {pm != null && pm.length > 0 && (
                <div className="private">{pm} </div>
              )}
            </div>
            {picture != null && picture.length > 0 && (
              <img className="picture" src={picture} />
            )}
          </div>
        ) : (
          ""
        );
      console.log(builtNotification);
    }
    return builtNotification;
  }

  return (
    <div
      className={
        unread ? "notifcationContainer unread" : "notifcationContainer"
      }
    >
      <div className="avatar">
        <img src={avatar} />
      </div>
      {buildMessage()}
      {/* <div className="content">{buildMessage()}</div> */}
    </div>
  );
}

function App() {
  const notificationsArray = [
    {
      sender: "Mark Webber",
      activity: "reacted to your recent post",
      message: "My first tournament today!",
      timestamp: "1m ago",
      unread: true,
    },
    {
      sender: "Angela Gray",
      activity: "followed you",
      timestamp: "5m ago",
      unread: true,
    },
    {
      sender: "Jacob Thompson",
      activity: "has joined your group",
      group: "Chess Club",
      timestamp: "1 day ago",
      unread: true,
    },
    {
      sender: "Rizky Hasanuddin",
      activity: "sent you a private message",
      timestamp: "5 days ago",
      pm: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      unread: false,
    },
    {
      sender: "Kimberly Smith",
      activity: "commented on your picture",
      timestamp: "1 week ago",
      picture: "./images/image-chess.webp",
      unread: false,
    },
    {
      sender: "Nathan Peterson",
      activity: "reacted to your recent post",
      message: "5 end-game strategies to increase your win rate",
      timestamp: "2 weeks ago",
      unread: false,
    },
    {
      sender: "Anna Kim",
      activity: "left the group",
      group: "Chess Club",
      timestamp: "2 weeks ago",
      unread: false,
    },
  ];
  const avatarsArray = [
    "./images/avatar-mark-webber.webp",
    "./images/avatar-angela-gray.webp",
    "./images/avatar-jacob-thompson.webp",
    "./images/avatar-rizky-hasanuddin.webp",
    "./images/avatar-kimberly-smith.webp",
    "./images/avatar-nathan-peterson.webp",
    "./images/avatar-anna-kim.webp",
  ];
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Notifications</h1>
        <div className="unreads">3</div>
        <button className="markAsRead">Mark all as read</button>
      </div>
      <div className="notifications">
        {notificationsArray.map((notification) => (
          <Notification
            notification={notification}
            avatar={avatarsArray[notificationsArray.indexOf(notification)]}
            unread={notification.unread}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
