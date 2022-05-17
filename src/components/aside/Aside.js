import './aside.scss';

const Aside = ({updateSort}) => {
    return (
        <aside className="aside">
            <h3 className="aside__title">Sort</h3>
            <button onClick={() => updateSort('city')} className="button">by city</button>
            <button onClick={() => updateSort('company')} className="button">by company</button>
        </aside>
    )
}

export default Aside;