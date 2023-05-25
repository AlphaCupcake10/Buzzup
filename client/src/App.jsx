import MainApp from './components/MainApp';
import LoginPage from './components/LoginPage';

import {Route,Routes} from 'react-router-dom';

function App()
{
  return(
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path="/*" element={<MainApp></MainApp>}/>
    </Routes>
  );
}

export default App;
