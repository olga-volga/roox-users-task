import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import useRequestService from '../../services/useRequestService';
import generateContent from '../../utils/generateContent';

import './userList.scss';

const UserList = ({sort}) => {
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState(0);

    const {process, setProcess, getUsers} = useRequestService();

    useEffect(() => {
        loadUsers();
    }, [sort]);

    const sortUsers = (a, b, key1, key2) => {
        if (a[key1][key2] > b[key1][key2]) return 1;
        if (a[key1][key2] == b[key1][key2]) return 0;
        if (a[key1][key2] < b[key1][key2]) return -1;
    };

    const onUsersLoaded = (res) => {
        let data = [];
        switch(sort) {
            case 'city':
                data = res.slice().sort((a, b) => sortUsers(a, b, 'address', 'city'));
                break;
            case 'company':
                data = res.slice().sort((a, b) => sortUsers(a, b, 'company', 'name'));
                break;
            default:
                data = res;
        }
        setUsers(data);
        setCount(data.length);
    };
    const loadUsers = () => {
        getUsers()
            .then(onUsersLoaded)
            .then(() => setProcess('confirmed'))
    };
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
    };
    return (
        <>
            {generateContent(process, () => renderUserItems(users))}
            <p className="user__count">Found {count} users</p>
        </>
    )
}

export default UserList;