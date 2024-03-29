import { Link } from "react-router-dom";
import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

import { TweetContainer } from "./Tweet.style";

// import profile9 from "../../assets/profile9.jpg";

interface TweetProps {
  profileName: string;
  profileUserName: string;
  profileImage: string;
  content: string;
}

export const Tweet = (props: TweetProps) => {
  return (
    <TweetContainer>
      <Link to="/status" className="tweet">
        <img src={props.profileImage} alt="profile2" />

        <div className="tweet-content">
          <div className="tweet-content-header">
            <strong>{props.profileName}</strong>
            <span>{props.profileUserName}</span>
          </div>

          <p>{props.content}</p>

          <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
              20
            </button>

            <button type="button">
              <ArrowsClockwise />
              18
            </button>

            <button type="button">
              <Heart />
              32
            </button>
          </div>
        </div>
      </Link>
    </TweetContainer>
  );
};
