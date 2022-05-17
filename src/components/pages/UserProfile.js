import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import useRequestService from '../../services/useRequestService';
import generateContent from '../../utils/generateContent';
import UserForm from '../userForm/UserForm';

const UserProfile = () => {
    const [data, setData] = useState(null);
    const [readonly, setReadonly] = useState(true);

    const {id} = useParams();
    const {process, setProcess, getUser} = useRequestService();

    useEffect(() => {
        loadUserData();
    }, [id]);

    const loadUserData = () => {
        getUser(id - 1)
            .then(res => setData(res))
            .then(() => setProcess('confirmed'))
    };
    const toggleEdit = (value) => {
        setReadonly(value);
    };
    return (
        <section style={{position: 'relative'}} className="profile">
            <h2 className="title">User Profile</h2>
            <button type="button" onClick={() => toggleEdit(false)} className="button button_edit">Edit</button>
            {generateContent(process, UserForm, {data, readonly, toggleEdit})}
        </section>
    )
}

export default UserProfile;