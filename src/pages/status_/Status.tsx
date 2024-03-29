import { PaperPlaneRight } from "phosphor-react";

import { StatusContainer } from "./Status.style";

import { Header } from "../../components/header_/Header";
import { Tweet } from "../../components/tweet_/Tweet";

import profile9 from "../../assets/profile9.jpg";

const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso.",
];

export const Status = () => {
  return (
    <StatusContainer>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est officiis id delectus. Quasi sunt reprehenderit esse, obcaecati deleniti, vel deserunt accusantium amet magni blanditiis quos repellat velit sint voluptate!" />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={profile9} alt="profile9" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </StatusContainer>
  );
};
