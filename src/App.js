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
            <Route
              path="/Space-tourism-multipage-website/"
              element={<Home />}
              exact
            />
            <Route
              path="/Space-tourism-multipage-website/destination"
              element={<Destination />}
            />
            <Route
              path="/Space-tourism-multipage-website/destination/mars"
              element={<DestinationMars />}
            />
            <Route
              path="/Space-tourism-multipage-website/destination/europa"
              element={<DestinationEuropa />}
            />
            <Route
              path="/Space-tourism-multipage-website/destination/titan"
              element={<DestinationTitan />}
            />
            <Route
              path="/Space-tourism-multipage-website/crew"
              element={<Crew />}
            />
            <Route
              path="/Space-tourism-multipage-website/technology"
              element={<Technology />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
