import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import UserTopNavBar from './Components/Users/UserTopNavBar';
import UserTypeSelection from './Components/Users/UserTypeSelection';
import UserFooter from './Components/Users/UserFooter';
import SearchContainer from './Components/Users/SearchContainer';
import AdminSideNavbar from './Components/Admin/AdminSideNavbar';
import AdminTopNavbar from './Components/Admin/AdminTopNavbar';
import AdminFooter from './Components/Admin/AdminFooter';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={[<><UserTopNavBar /><div className='user_body'><UserTypeSelection /><SearchContainer /></div><UserFooter /></>]} />
        <Route path='/admin' element={[<> <AdminSideNavbar /><AdminTopNavbar /><div className='user_body'></div><AdminFooter /> </>]} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
