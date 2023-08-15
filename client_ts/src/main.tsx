import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Components/Pages/LandingPage/LandingPage.tsx';
import Soon from './Components/Pages/LandingPage/Soon.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<LandingPage/>}/>
      <Route path="/soon" element={<Soon/>}/>
    </Routes>
  </BrowserRouter>
)
