import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    let [data, setData] = useState();
    const checkLogin = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        axios
            .get(`/assignment/checklogin/${username}/${password}`)
            .then((res) => setData(JSON.stringify(res.data)))
            .catch((e) => console.log(e));
    };
    const showCurrentUserDetails = () => {
        setData('First Login with correct info');
        axios
            .get('/showusers')
            .then((res) => {
                setData(JSON.stringify(res.data.results[0]));
            })
            .catch((e) => console.log(e));
    };
    return (
        <div>
            {data}
            <form className='form' onSubmit={checkLogin}>
                <h1>Login</h1>
                <label>
                    <h5>username</h5>
                </label>
                <input
                    name='username'
                    placeholder='username..'
                    className='form-control'
                />
                <label>
                    <h5>Password</h5>
                </label>
                <input
                    name='password'
                    type='password'
                    placeholder='password..'
                    className='form-control'
                />
                <div className='text-center'>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </form>
            <div>
                <button
                    className='btn btn-info'
                    onClick={showCurrentUserDetails}
                >
                    show user details
                </button>
            </div>
        </div>
    );
};
export default Login;
