import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Dashboard from './pages/Dashboard.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <CssBaseline>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </CssBaseline>
      </BrowserRouter>
    </div>
  );
}

export default App;
