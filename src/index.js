import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route , BrowserRouter , Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import MazeGenerator from './Pages/Dashboard/MazeGenerator';
import SodukuGenerator from './Pages/Dashboard/SodukuGenerator';
import TemplateGenerator from './Pages/Dashboard/TemplateGenerator';
import WordSearchGenerator from './Pages/Dashboard/WordSearchGenerator';
import Profile from './Pages/Dashboard/Profile'
import NotFound from './Pages/404NotFound';
import About from "./Pages/About"
import TCS from "./Pages/TCS"
import PrivacyPolicy from './Pages/Privacypolicy';

import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <BrowserRouter >
  <AuthContextProvider>
      <Routes>
        <Route path='/' exact element={<App />}/>
        <Route path='login'  element={<Login />}/>
        <Route path='signup'  element={<Signup/>}/>
        <Route path='about'  element={<About/>}/>
        <Route path='tcs'  element={<TCS/>}/>
        <Route path='privacy'  element={<PrivacyPolicy/>}/>
        <Route path='dashboard'  element={<Dashboard/>}>
          <Route path='maze-generator' element={<MazeGenerator />}/>
          <Route path='sudoku-generator' element={<SodukuGenerator />}/>
          <Route path='template-generator' element={< TemplateGenerator />}/>
          <Route path='word-search-generator' element={< WordSearchGenerator />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>


      </Routes>
    
    </AuthContextProvider>
    </BrowserRouter>
);