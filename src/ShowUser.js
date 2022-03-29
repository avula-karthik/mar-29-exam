import { useEffect, useState } from 'react';
import axios from 'axios';
const ShowUser = () => {
    let [data, setData] = useState([]);
    const showCurrentUserDetails = () => {
        setData('First Login with correct info');
        axios
            .get('/showusers')
            .then((res) => {
                setData(JSON.stringify(res.data));
            })
            .catch((e) => console.log(e));
    };
    useEffect(() => {
        showCurrentUserDetails();
    }, []);

    return (
        <div>
            <h1>User Info</h1>
            <h2>{data}</h2>
        </div>
    );
};
export default ShowUser;
