import './App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Link to='/register' className='col-lg-6 btn btn-primary'>
                    register here
                </Link>
                <Link to='/login' className='col-lg-6 btn btn-primary'>
                    Login here
                </Link>
                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
