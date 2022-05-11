import React, { useState, useEffect } from 'react';

import requestService from '../../services/requestService';

import './userList.scss';

const UserList = () => {
    const [process, setProcess] = useState('loading');
    const [users, setUsers] = useState(null);

    const {getUsers} = requestService();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        getUsers()
            //.then(res => console.log(res))
            .then(res => setUsers(res))
            .then(() => setProcess('confirmed'))
    }
    const renderUserItems = (users) => {
        const items = users.map(item => {
            const {id, name, address, company} = item;
            return (
                <li key={id} className="user__item">
                    <p className="user__name"><span>Name and surname:</span> {name}</p>
                    <p className="user__city"><span>City:</span> {address.city}</p>
                    <p className="user__company"><span>Company:</span> {company.name}</p>
                    <a href="#" className="user__details">See details</a>
                </li>
            )
        });
        return items;
    }
    const spinner = process === 'loading' ? <div>Loading...</div> : null;
    const content = process === 'confirmed' ? renderUserItems(users) : null;
    return (
        <ul className="user__list">
            {spinner}
            {content}
        </ul>
    )
}

export default UserList;