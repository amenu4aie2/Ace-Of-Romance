import logo from "./logo.svg";
// import "./App.css";
import Page from "./Components/Page/Page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playground from "./Components/Playground/Playground.jsx";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/chuckles" element={<Playground />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
