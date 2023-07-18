import {Navigate, Route,Routes} from 'react-router-dom';
import SignInPage from './Pages/Login/SignInPage';
import SignUpPage from './Pages/Login/SignUpPage';
import Buzzup from './Pages/Main/Buzzup';
import {useAuth} from './Contexts/AuthContext';
import NotFound404 from './Pages/Main/NotFound404';

function App()
{
  const auth = useAuth();

  return(
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}/>
        {/* Protected Routes */}
        <Route path='/*' element={auth.userdata?(<Buzzup></Buzzup>):<NotFound404 to='/signin' label='SIGN IN'></NotFound404>}/>
        <Route path='/signin' element={<SignInPage></SignInPage>}/>
      </Routes>
    </div>
  );
}
// TODO
// Refresh Token

export default App;
