import { Link } from "react-router-dom";

function Home() {
    return <div className="homePage">
        <Link to='/Bio'>Краткая информация обо мне</Link>
        <Link to='/infoCity'>Информация о городе</Link>
        <Link to='/recipe'>Кулинарный рецепт</Link>
        <Link to='/Shakespeare'>Шекспир</Link>
        <Link to='/FavoriteMovie'>Любимый кинофильм</Link>
        <Link to='/aboutMe'>Персональная страница</Link>
    </div>
}

export default Home;