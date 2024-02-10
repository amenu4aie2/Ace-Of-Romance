import logo from "./logo.svg";
import "./App.css";
import Page from "./Components/Page/Page.jsx";
// import { BrowswerRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Page />
      {/* <Router>

    <Route path="#" element={<Page/>}></Route>
    </Router> */}
    </div>
  );
}

export default App;
