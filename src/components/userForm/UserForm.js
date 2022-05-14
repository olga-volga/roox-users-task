import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

import './userForm.scss';

const UserInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const borderStyle = meta.touched && meta.error ? {border: '1px solid #D91313'} : null;
    return (
        <>
            <label htmlFor={props.id}>{label}</label>
            <input style={borderStyle} {...field} {...props} />
        </>
    )
};

const UserForm = ({data, readonly}) => {
    const {name, username, email, address, phone, website} = data;
    let btnClass = readonly ? 'button_disabled' : 'button_submit';

    return (
        <Formik
            initialValues={{
                name: name,
                username: username,
                email: email,
                street: address.street,
                city: address.city,
                zipcode: address.zipcode,
                phone: phone,
                website: website,
                comment: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().email().required(),
                street: Yup.string().required(),
                city: Yup.string().required(),
                zipcode: Yup.string().required(),
                phone: Yup.string().required(),
                website: Yup.string().required()
            })}
            onSubmit={(values) => console.log(JSON.stringify(values))}
        >
            <>
                <Form id="userForm" className="form">
                    <UserInput label="Name" id="name" name="name" type="text" readOnly={readonly} />
                    <UserInput label="User name" id="username" name="username" type="text" readOnly={readonly} />
                    <UserInput label="E-mail" id="email" name="email" type="email" readOnly={readonly} />
                    <UserInput label="Street" id="street" name="street" type="text" readOnly={readonly} />
                    <UserInput label="City" id="city" name="city" type="text" readOnly={readonly} />
                    <UserInput label="Zip code" id="zipcode" name="zipcode" type="text" readOnly={readonly} />
                    <UserInput label="Phone" id="phone" name="phone" type="text" readOnly={readonly} />
                    <UserInput label="Website" id="website" name="website" type="text" readOnly={readonly} />
                    <label htmlFor="comment">Comment</label>
                    <Field name="comment" as="textarea" id="comment" />
                </Form>
                <button type="submit" form="userForm" disabled={readonly} className={`button button_form ${btnClass}`}>Send</button>
            </>
        </Formik>
    )
}

export default UserForm;