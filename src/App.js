import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import GameInfo from './components/gameInfo/GameInfo';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Other from './components/other/Other';

function App() {

  const [search,setSearch] = useState('');
  const [isShowSearch, setIsShowSearch] = useState(true);

  return (
    <div className="App">
      <Header setSearch={setSearch} isShowSearch={isShowSearch} setIsShowSearch={setIsShowSearch} />
      <Routes>
          <Route path="/ss-games" index element={<Content search={search} />} />
          <Route path="/:game" element={<GameInfo  setIsShowSearch={setIsShowSearch} />} />
          <Route path="/:game/:other" element={<GameInfo  setIsShowSearch={setIsShowSearch}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/other" element={<Other search={search} />} />
      </Routes>
    </div>
  );
}

export default App;
