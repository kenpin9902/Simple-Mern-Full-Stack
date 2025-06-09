import { BrowserRouter, Routes, Route } from "react-router"

import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
