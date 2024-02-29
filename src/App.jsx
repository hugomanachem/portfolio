import { Routes, Route } from "react-router-dom";
import PortfolioFR from "../src/pages/PortfolioFR";
import PortfolioEN from "./pages/PortfolioEN";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PortfolioFR />} />
        <Route path="/en" element={<PortfolioEN />} />
      </Routes>
    </div>
  )
}

export default App
