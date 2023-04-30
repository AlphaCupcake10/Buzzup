import MainApp from './Pages/MainApp';
import LoginPage from './Pages/LoginPage';

import {Route,Routes} from 'react-router-dom';
import SignUp from './Pages/SignUp';

function App()
{
  return(
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path="/signup" element={<SignUp></SignUp>}/>
      <Route path="/*" element={<MainApp></MainApp>}/>
    </Routes>
  );
}

export default App;
