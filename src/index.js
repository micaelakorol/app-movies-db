import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Contact from './routes/Contact'
import Movies from './routes/Movies'
import First from './routes/First';
import Index from './components/Index';
import Error from './routes/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Routes>
  <Route path='/' element={<App />}>
  <Route index element={<Index/>} /> {/* route index */}
<Route path='/top' element={<First/>}/>
<Route path='/movies' element={<Movies/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='*' element={<Error/>}/>
</Route>
  </Routes>
    </BrowserRouter>

);

