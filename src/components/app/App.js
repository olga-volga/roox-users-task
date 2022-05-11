import Aside from '../aside/Aside';
import Users from '../pages/Users';
import UserProfile from '../pages/UserProfile';

const App = () => {
    return (
        <div className="app">
            <Aside />
            <main>
                <UserProfile />
            </main>
        </div>
    )
}

export default App;