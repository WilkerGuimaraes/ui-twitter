import { FormEvent, useState } from "react";

import { TimelineContainer } from "./Timeline.style";

import { Separator } from "../../components/separator_/Separator";
import { Tweet } from "../../components/tweet_/Tweet";
import { Header } from "../../components/header_/Header";

import profile9 from "../../assets/profile9.jpg";

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Deu certo tweetar!",
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  };

  return (
    <TimelineContainer>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src={profile9} alt="profile9" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(event) => setNewTweet(event.target.value)}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </TimelineContainer>
  );
};
