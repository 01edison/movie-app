import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SearchPage from "./components/SearchPage";

function App() {
  const [trigger, setTrigger] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setTrigger={setTrigger} trigger={trigger}/>}>
          <Route index element={<Home />} />
          <Route
            path="search/:searchValue"
            element={<SearchPage trigger={trigger} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
