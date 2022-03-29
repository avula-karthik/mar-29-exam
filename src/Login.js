import axios from 'axios';
import { useState } from 'react';
import ShowUser from './ShowUser';
const Login = () => {
    let [data, setData] = useState();
    const checkLogin = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        axios
            .get(`/assignment/checklogin/${username}/${password}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => console.log(e));
    };
    
    return (
        <div>
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
        </div>
    );
};
export default Login;
