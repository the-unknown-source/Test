import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";


function TweetBox() {
    const [tweetText, setTweetText] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "John Doe",
      username: "johndoe",
      verified: true,   
      text: tweetText,
      image: tweetImage,
      avatar:
        "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
    });

    setTweetText("");
    setTweetImage(" ");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />
          <input
            onChange={(e) => setTweetText(e.target.value)}
            value={tweetText}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
