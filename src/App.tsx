import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="*"  element={<NotFound /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
