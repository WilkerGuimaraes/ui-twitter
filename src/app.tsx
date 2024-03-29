import { Content, Layout } from "./app.style";
import { Header } from "./components/header_/Header";
import { Sidebar } from "./components/sidebar_/Sidebar";

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Header title="Home" />
      </Content>
    </Layout>
  );
};
