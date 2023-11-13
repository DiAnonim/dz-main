import { Link } from "react-router-dom";

function Home() {
    return <div className="homePage">
        <Link to='/Info-City'>Информация о городе</Link>
        <Link to='/famousAttraction'>Самая известная достопримечательность</Link>
        <Link to='/otherAttractions'>Другие достопримечательности</Link>
        <Link to='/Photo'>Фотографии города</Link>
    </div>
}

export default Home;