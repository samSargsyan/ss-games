import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import GameInfo from './components/gameInfo/GameInfo';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";

function App() {

  const [search,setSearch] = useState('');

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Routes>
          <Route path="/ss-games" index element={<Content search={search} />} />
          <Route path="/:game" element={<GameInfo />} />
      </Routes>
    </div>
  );
}

export default App;
