import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import requestService from '../../services/requestService';
import Form from '../form/Form';

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
    const enableEdit = () => {
        setReadonly(false);
    };
    const spinner = process === 'loading' ? <div>Loading...</div> : null;
    const content = process === 'confirmed' ? <Form data={data} readonly={readonly} /> : null;
    return (
        <section style={{position: 'relative'}} className="profile">
            <h2 className="title">User Profile</h2>
            <button type="button" onClick={enableEdit} className="button button_edit">Edit</button>
            {spinner}
            {content}
        </section>
    )
}

export default UserProfile;