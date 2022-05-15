import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import requestService from '../../services/requestService';
import UserForm from '../userForm/UserForm';

const UserProfile = () => {
    const [process, setProcess] = useState('loading');
    const [data, setData] = useState(null);
    const [readonly, setReadonly] = useState(true);

    const {id} = useParams();
    const {getUser} = requestService();

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
    const spinner = process === 'loading' ? <div>Loading...</div> : null;
    const content = process === 'confirmed' ? <UserForm data={data} readonly={readonly} toggleEdit={toggleEdit} /> : null;
    return (
        <section style={{position: 'relative'}} className="profile">
            <h2 className="title">User Profile</h2>
            <button type="button" onClick={() => toggleEdit(false)} className="button button_edit">Edit</button>
            {spinner}
            {content}
        </section>
    )
}

export default UserProfile;