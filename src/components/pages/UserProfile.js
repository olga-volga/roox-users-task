import Form from '../form/Form';

const UserProfile = () => {
    return (
        <section style={{position: 'relative'}} className="profile">
            <h2 className="title">User Profile</h2>
            <button type="button" className="button button_edit">Edit</button>
            <Form />
        </section>
    )
}

export default UserProfile;