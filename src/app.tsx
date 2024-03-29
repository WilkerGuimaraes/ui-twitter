import { Content, Layout } from "./app.style";
import { Header } from "./components/header_/Header";
import { Sidebar } from "./components/sidebar_/Sidebar";

import profile9 from "./assets/profile9.jpg";
import { Separator } from "./components/separator_/Separator";
import { Tweet } from "./components/tweet_/Tweet";

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Content>
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
      </Content>
    </Layout>
  );
};
