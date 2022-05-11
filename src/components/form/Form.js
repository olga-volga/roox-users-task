import './form.scss';

const Form = () => {
    return (
        <>
            <form action="#" id="userForm" className="form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Bob Smith" readonly />
                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" placeholder="Bob" readonly />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="example@mail.com" readonly />
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" placeholder="Hoeger Mall street" readonly />
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="South Elvis" readonly />
                <label htmlFor="zipcode">Zip code</label>
                <input type="text" id="zipcode" name="zipcode" placeholder="123432" readonly />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="+123456789" readonly />
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" placeholder="www.example.com" readonly />
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="comment"></textarea>
            </form>
            <button type="submit" form="userForm" disabled className="button button_form button_disabled">Send</button>
        </>
    )
}

export default Form;