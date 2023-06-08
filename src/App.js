import './App.css';
import Content from './components/content/Content';
import GameInfo from './components/gameInfo/GameInfo';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" index element={<Content />} />
          <Route path="/:game" element={<GameInfo />} />
      </Routes>
    </div>
  );
}

export default App;
