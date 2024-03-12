import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Header2.css";
import "./App.css";
import Page1 from "./pages/Page1";
import Header from "./components/header";
import WatchList from "./pages/WatchList";
function App() {
  return (
    <div>
      
      <Header />
      <Page1 />
      <h1>Movie_list</h1>
    </div>
  );
}

export default App;
