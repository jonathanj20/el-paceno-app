import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 2000,
    once: false
  });
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
