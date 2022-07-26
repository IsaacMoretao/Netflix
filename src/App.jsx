import { Home } from "./pages/Home";
import { MyInfo } from "./pages/MyInfo";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './globals.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Netflix/" element={<Home />} />
          <Route path="/Netflix/Info" element={<MyInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

