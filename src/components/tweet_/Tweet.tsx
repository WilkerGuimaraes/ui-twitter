import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

import { TweetContainer } from "./Tweet.style";

import profile9 from "../../assets/profile9.jpg";

export const Tweet = () => {
  return (
    <TweetContainer>
      <a href="" className="tweet">
        <img src={profile9} alt="profile2" />

        <div className="tweet-content">
          <div className="tweet-content-header">
            <strong>John Doe</strong>
            <span>@johnDoe</span>
          </div>

          <p>
            Acabei de migrar um projeto React GIGANTE de create-react-app para
            Vite e os resultados foram:
            <br />
            <br />
            ✅ npm start: De 32s para 400ms (sim, demorava 30s)
            <br />
            ✅ npm build: De 120s para 22s
            <br />
            <br />
            Além disso, troquei do Yarn para o PNPM e o install das deps mudou
            de 24s para 8s 🔥
          </p>

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
      </a>
    </TweetContainer>
  );
};
