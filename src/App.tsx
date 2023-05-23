import React from 'react';
import './App.css';
import { Theme } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from './scene/global/Sidebar';
import Dashboard from './scene/dashboard';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className='app'>
        <SideBar/>
        <main className='content'>
          <Dashboard/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
