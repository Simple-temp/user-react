import React from 'react';
import './Users.css';

const Users = (props) => {
    const {name,img,email,address,income} = props.info
    return (
        <div className='usersContainer'>
            <div className="left-side">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
            <div className="right-side">
                <div className="manage">
                    <div className="info">
                        <ul>
                            <li>Email : {email}</li>
                            <li>Address : {address}</li>
                            <li>Salary : ${income}</li>
                        </ul>
                    </div>
                    <div className="addbtn">
                        <button className='Add' onClick={()=>props.addUser(props.info)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;