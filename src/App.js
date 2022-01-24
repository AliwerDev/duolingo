import { Routes, Route } from "react-router-dom";

import GameBox from "./pages/gameBox";
import StartBox from "./pages/StartBox";

function App() {
  return (
      <Routes>
          <Route path="/" element={<StartBox />} />
          <Route path="/GameBox" element={<GameBox />} />
          <Route path="/FinishBox" element={<StartBox />} />
      </Routes>
  )
}

export default App;
