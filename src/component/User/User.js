import React, { useState } from 'react';
import fakeData from '../../fakeData/userData.json';
import Management from '../Management/Management';
import Users from '../Users/Users';
import './User.css';

const User = () => {
    const showdata = fakeData.slice(0,20);
    const [data,setData] = useState(showdata);
    const [manage, setManage] = useState([])
    const addUser = (info) =>
    {
        const newInfo = [...manage,info];
        setManage(newInfo);
    }
    return (
        <div className='userContainer'>
            <p className='usersTitle'>All Users Here </p>
            <div className='flex'>
                <div className="users">
                    {
                        data.map(data => <Users info={data} key={data.key} addUser={addUser}></Users>)
                    }
                </div>
                <div className="management">
                    <Management manage={manage}></Management>
                </div>
            </div>
        </div>
    );
};

export default User;