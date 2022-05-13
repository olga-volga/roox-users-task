import './form.scss';

const Form = ({data, readonly}) => {
    const {name, username, email, address, phone, website} = data;
    let btnClass = readonly ? 'button_disabled' : 'button_submit';

    const submitForm = (e) => {
        e.preventDefault();
        
        let user = {};
        const formData = new FormData(e.target);

        for(let [key, value] of formData) {
            user[key] = value;
        }
        let userToJson = JSON.stringify(user);
        console.log(userToJson);
    };
    return (
        <>
            <form onSubmit={submitForm} action="#" id="userForm" className="form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} readOnly={readonly} />
                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" value={username} readOnly={readonly} />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={email} readOnly={readonly} />
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" value={address.street} readOnly={readonly} />
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={address.city} readOnly={readonly} />
                <label htmlFor="zipcode">Zip code</label>
                <input type="text" id="zipcode" name="zipcode" value={address.zipcode} readOnly={readonly} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={phone} readOnly={readonly} />
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" value={website} readOnly={readonly} />
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="comment"></textarea>
            </form>
            <button type="submit" form="userForm" disabled={readonly} className={`button button_form ${btnClass}`}>Send</button>
        </>
    )
}

export default Form;