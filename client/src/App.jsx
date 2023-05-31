import MainApp from './components/MainApp';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import {Navigate, Route,Routes} from 'react-router-dom';

function App()
{
  return(
    <Routes>
      <Route path="/signup" element={<SignUpPage></SignUpPage>}/>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path='/app/*' element={<MainApp></MainApp>}></Route>
      <Route path='*' element={<Navigate to='/app'></Navigate>}></Route>
    </Routes>
  );
}

export default App;
