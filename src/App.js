import { Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllCats } from './pages/AllCats';
import { FavCats } from './pages/FavCats';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/frontend-challenge" element={<AllCats />} />
          <Route path="/favorites" element={<FavCats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
