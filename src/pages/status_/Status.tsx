import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

import { StatusContainer } from "./Status.style";

import { Header } from "../../components/header_/Header";
import { Tweet } from "../../components/tweet_/Tweet";

import profile9 from "../../assets/profile9.jpg";

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  };

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  };

  return (
    <StatusContainer>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est officiis id delectus. Quasi sunt reprehenderit esse, obcaecati deleniti, vel deserunt accusantium amet magni blanditiis quos repellat velit sint voluptate!" />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={profile9} alt="profile9" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          ></textarea>
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
