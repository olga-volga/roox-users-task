import './aside.scss';

const Aside = () => {
    return (
        <aside className="aside">
            <h3 className="aside__title">Sort</h3>
            <button className="button">by city</button>
            <button className="button">by company</button>
        </aside>
    )
}

export default Aside;