import axios from 'axios';

const Register = () => {
    const addUser = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        console.log(username);
        let password = e.target.password.value;
        axios
            .post(`/assignment/`, { username, password })
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <form className='form' onSubmit={addUser}>
                <h1>Register</h1>
                <label>
                    <h5>Username</h5>
                </label>
                <input
                    type='text'
                    name='username'
                    className='form-control'
                    placeholder='username..'
                />
                <label>
                    <h5>Password</h5>
                </label>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='password..'
                />
                <div className='text-center'>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
