import "./GlobalStyles.js";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination.js";
import DestinationMars from "./pages/DestinationMars.js";
import DestinationEuropa from "./pages/DestinationEuropa.js";
import DestinationTitan from "./pages/DestinationTitan.js";
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
            <Route path="/destination/mars" element={<DestinationMars />} />
            <Route path="/destination/europa" element={<DestinationEuropa />} />
            <Route path="/destination/titan" element={<DestinationTitan />} />
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
