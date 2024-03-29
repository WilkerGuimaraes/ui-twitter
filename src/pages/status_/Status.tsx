import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

import { StatusContainer } from "./Status.style";

import { Header } from "../../components/header_/Header";
import { Tweet } from "../../components/tweet_/Tweet";

import profile1 from "../../assets/profile1.jpg";
import profile5 from "../../assets/profile5.jpg";
import profile6 from "../../assets/profile6.jpg";
import profile7 from "../../assets/profile7.jpg";
import profile8 from "../../assets/profile8.jpg";

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    {
      profileName: "Hailey Jobs",
      profileUserName: "@haileyjobs",
      profileImage: profile5,
      content: "Concordo.",
    },
    {
      profileName: "Diego Stones",
      profileUserName: "@diegostones",
      profileImage: profile6,
      content: "Olha, faz sentido!",
    },
    {
      profileName: "Joe Steve",
      profileUserName: "@joesteve",
      profileImage: profile7,
      content: "Parabéns pelo progresso.",
    },
  ]);

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    setAnswers([
      {
        profileName: "John Doe",
        profileUserName: "@johndoe",
        content: newAnswer,
        profileImage: profile1,
      },
      ...answers,
    ]);
    setNewAnswer("");
  };

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([
        {
          profileName: "John Doe",
          profileUserName: "@johndoe",
          content: newAnswer,
          profileImage: profile1,
        },
        ...answers,
      ]);
      setNewAnswer("");
    }
  };

  return (
    <StatusContainer>
      <Header title="Tweet" />

      <Tweet
        profileName={"Mary Elizabeth"}
        profileUserName={"@marybeth"}
        profileImage={profile8}
        content="Esta semana eu tenho trabalhado muito com projetos Front-end e percebi que mesmo que existam tantas bibliotecas e frameworks como jQuery, AngularJS, React e Vue.js, o JavaScript só tende a se tornar mais e mais fundamental para o desenvolvimento de aplicativos web complexos e altamente interativos."
      />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={profile1} alt="profile1" />
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

      {answers.map((answer, index) => (
        <Tweet
          key={index}
          profileName={answer.profileName}
          profileUserName={answer.profileUserName}
          content={answer.content}
          profileImage={answer.profileImage}
        />
      ))}
    </StatusContainer>
  );
};
