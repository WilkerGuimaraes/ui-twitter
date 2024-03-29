import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Content, Layout } from "./app.style";

import { Sidebar } from "./components/sidebar_/Sidebar";

import { Timeline } from "./pages/timeline_/Timeline";
import { Status } from "./pages/status_/Status";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};
