import Aside from '../aside/Aside';
import Users from '../pages/Users';

const App = () => {
    return (
        <div className="app">
            <Aside />
            <main>
                <Users />
            </main>
        </div>
    )
}

export default App;