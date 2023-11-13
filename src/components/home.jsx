import { Link } from "react-router-dom";

function Home() {
    return <div className="homePage">
        <Link to='/bio'>Биография художника</Link>
        <Link to='/famousPainting'>Самая известная картина</Link>
        <Link to='/gallery'>Галлерея картин</Link>
    </div>
}

export default Home;