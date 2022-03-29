import './App.css';
import Register from './Register';
import Login from './Login';
import ShowUser from './ShowUser';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Link to='/register' className='col-lg-4 btn btn-primary'>
                    register here
                </Link>
                <Link to='/login' className='col-lg-4 btn btn-primary'>
                    Login here
                </Link>
                <Link to='/showuser' className='col-lg-4 btn btn-primary'>
                    Show User info
                </Link>
                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/showuser' element={<ShowUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
