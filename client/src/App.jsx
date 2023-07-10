import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Diary from './pages/Diary';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Write from './pages/Write';
import Edit from './pages/Edit';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/report/write" element={<Write />} />
          <Route path="/report/edit" element={<Edit />} />
          <Route path="/diary/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
