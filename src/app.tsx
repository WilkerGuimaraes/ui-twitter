import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Content, Layout } from "./app.style";
import { Sidebar } from "./components/sidebar_/Sidebar";
import { Timeline } from "./pages/timeline_/Timeline";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<Timeline />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};
