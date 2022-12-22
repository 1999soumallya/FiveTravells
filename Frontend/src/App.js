import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import UserTopNavBar from './Components/Users/UserTopNavBar';
import UserTypeSelection from './Components/Users/UserTypeSelection';
import UserFooter from './Components/Users/UserFooter';
import SearchContainer from './Components/Users/SearchContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={[<><UserTopNavBar /><div className='admin_body'><UserTypeSelection /><SearchContainer /></div><UserFooter/></>]}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
