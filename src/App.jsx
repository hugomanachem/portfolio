import { Routes, Route } from "react-router-dom";
import Portfolio from "../src/pages/Portfolio";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App
