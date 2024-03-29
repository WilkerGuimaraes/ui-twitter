import { FormEvent, KeyboardEvent, useState } from "react";

import { TimelineContainer } from "./Timeline.style";

import { Separator } from "../../components/separator_/Separator";
import { Tweet } from "../../components/tweet_/Tweet";
import { Header } from "../../components/header_/Header";

import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    {
      profileName: "Marcus Right",
      profileUserName: "@marcusright",
      profileImage: profile2,
      content:
        "Estudar React é a melhor opção para ser desenvolvedor Front-end.",
    },
    {
      profileName: "Anthony Deps",
      profileUserName: "@anthonydeps",
      profileImage: profile3,
      content: "Já fiz vários projetos com React.",
    },
    {
      profileName: "Jane Mary",
      profileUserName: "@janemary",
      profileImage: profile4,
      content: "Alguém aqui está buscando a primeira oportunidade?",
    },
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();

    setTweets([
      {
        profileName: "John Doe",
        profileUserName: "@johndoe",
        content: newTweet,
        profileImage: profile1,
      },
      ...tweets,
    ]);
    setNewTweet("");
  };

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([
        {
          profileName: "John Doe",
          profileUserName: "@johndoe",
          content: newTweet,
          profileImage: profile1,
        },
        ...tweets,
      ]);
      setNewTweet("");
    }
  };

  return (
    <TimelineContainer>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src={profile1} alt="profile9" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          profileName={tweet.profileName}
          profileUserName={tweet.profileUserName}
          content={tweet.content}
          profileImage={tweet.profileImage}
        />
      ))}
    </TimelineContainer>
  );
};
