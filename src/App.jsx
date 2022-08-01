import { Home } from "./pages/Home/index";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './globals.scss'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

