import React from 'react';
import './Management.css';
import img from '../../img/i.png';
const Management = (props) => {
    const manage = props.manage;
    console.log(manage);
    let total = 0;
    for(var i=0; i<manage.length; i++)
    {
        var salary = manage[i].income;
        total = total + salary
    }
    return (
        <div className='manageContainer'>
            <h2>User Management</h2>
            <div className="manageInfo">
                <div className="userBox">
                    <div className="useL">
                    <img src={img} alt="" /> 
                    </div>
                    <div className="useR">
                    <p>Added User : {manage.length}</p>
                    </div>
                </div>
                <p>User Salarys : {total}</p>
            </div>
        </div>
    );
};

export default Management;