import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/Index";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
