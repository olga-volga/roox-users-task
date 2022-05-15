import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import requestService from '../../services/requestService';
import generateContent from '../../utils/generateContent';

import './userList.scss';

const UserList = () => {
    const [process, setProcess] = useState('loading');
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState(0);

    const {getUsers} = requestService();

    useEffect(() => {
        loadUsers();
    }, []);

    const onUsersLoaded = (data) => {
        setUsers(data);
        setCount(data.length);
    }
    const loadUsers = () => {
        getUsers()
            .then(onUsersLoaded)
            .then(() => setProcess('confirmed'))
            .catch(() => setProcess('error'))
    }
    const renderUserItems = (users) => {
        const items = users.map(item => {
            const {id, name, address, company} = item;
            return (
                <li key={id} className="user__item">
                    <p className="user__name"><span>Name and surname:</span> {name}</p>
                    <p className="user__city"><span>City:</span> {address.city}</p>
                    <p className="user__company"><span>Company:</span> {company.name}</p>
                    <Link to={`/profile/${id}`} className="user__details">See details</Link>
                </li>
            )
        });
        return (
            <ul className="user__list">
                {items}
            </ul>
        )
    }
    return (
        <>
            {generateContent(process, () => renderUserItems(users))}
            <p className="user__count">Found {count} users</p>
        </>
    )
}

export default UserList;