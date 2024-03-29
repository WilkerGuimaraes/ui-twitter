import { Content, Layout } from "./app.style";
import { Sidebar } from "./components/sidebar_/Sidebar";

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <p>content</p>
      </Content>
    </Layout>
  );
};
