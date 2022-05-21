import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function Routers() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </>
  );
}
export default Routers;
