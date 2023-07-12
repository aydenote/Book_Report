import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Diary from './pages/Diary';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ReportWrite from './pages/ReportWrite';
import ReportEdit from './pages/ReportEdit';
import DiaryWrite from './pages/DiaryWrite';
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
          <Route path="/report/write" element={<ReportWrite />} />
          <Route path="/report/edit" element={<ReportEdit />} />
          <Route path="/diary/write" element={<DiaryWrite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
