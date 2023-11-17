import './style.css'

function Movie({ val }) {
    return <div className="galleryStyle">
        <h1>{val.name}</h1>
        <p>Режиссёр:{val.director}</p>
        <p>Год выпуска:{val.release}</p>
        <p>Студия:{val.studio}</p>
        <img src={val.poster} alt="" />
    </div>
}

export default Movie;