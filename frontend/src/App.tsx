import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { LogsPage } from "./pages/LogsPage/LogsPage";
import { RequestsPage } from "./pages/Requests/Requests";
import { PackagesPage } from "./pages/Packages/Packages";
import { QueryClientProvider, queryClient } from "@/queries/react-query-test";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RequestsPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </Layout>
    </Router>
    </QueryClientProvider>
  )
}

export default App;
