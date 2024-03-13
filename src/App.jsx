import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Header2.css";
import "./App.css";
import Page1 from "./pages/Page1";
import Header from "./components/header";
import WatchList from "./pages/WatchList";
import React, { useState } from "react";
function App() {
  const [watchlist, setWatchlist] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/WatchList" element={<WatchList watchlist={watchlist} />} />
        <Route path="/" element={<Page1 watchlist={watchlist} setWatchlist={setWatchlist}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
