import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Header2.css";
import "./App.css";
import Page1 from "./pages/Page1";
import Header from "./components/header";
import WatchList from "./pages/WatchList";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/WatchList" element={<WatchList />} />
        <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
