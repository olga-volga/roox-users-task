import Aside from '../aside/Aside';
import UserList from '../userList/UserList';

const App = () => {
    return (
        <div className="app">
            <Aside />
            <main>
                <h2 className="page__title">User List</h2>
                <UserList />
                <p style={{fontSize: '12px', lineHeight: '14px', textAlign: 'right', marginTop: '10px'}}>Found number of users</p>
            </main>
        </div>
    )
}

export default App;