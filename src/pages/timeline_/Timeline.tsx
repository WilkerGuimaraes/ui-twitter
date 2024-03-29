import { TimelineContainer } from "./Timeline.style";

import { Separator } from "../../components/separator_/Separator";
import { Tweet } from "../../components/tweet_/Tweet";
import { Header } from "../../components/header_/Header";

import profile9 from "../../assets/profile9.jpg";

export const Timeline = () => {
  return (
    <TimelineContainer>
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src={profile9} alt="profile9" />
          <textarea id="tweet" placeholder="What's happening?"></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      <Tweet />
      <Tweet />
    </TimelineContainer>
  );
};
