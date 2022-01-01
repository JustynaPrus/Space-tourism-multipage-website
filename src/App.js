import "./GlobalStyles.js";
import { GlobalStyles, Container } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination.js";
import Crew from "./pages/Crew.js";
import Technology from "./pages/Technology.js";
import Error from "./pages/Error.js";

function App() {
  return (
    <>
      <>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
