import UserList from '../userList/UserList';

const Users = ({sort}) => {
    return (
        <section className="users">
            <h2 className="title">User List</h2>
            <UserList sort={sort} />
        </section>
    )
}

export default Users;