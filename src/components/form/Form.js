import './form.scss';

const Form = ({data}) => {
    const {name, username, email, address, phone, website} = data;
    return (
        <>
            <form action="#" id="userForm" className="form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder={name} readOnly />
                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" placeholder={username} readOnly />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder={email} readOnly />
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" placeholder={address.street} readOnly />
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder={address.city} readOnly />
                <label htmlFor="zipcode">Zip code</label>
                <input type="text" id="zipcode" name="zipcode" placeholder={address.zipcode} readOnly />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder={phone} readOnly />
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" placeholder={website} readOnly />
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="comment"></textarea>
            </form>
            <button type="submit" form="userForm" disabled className="button button_form button_disabled">Send</button>
        </>
    )
}

export default Form;