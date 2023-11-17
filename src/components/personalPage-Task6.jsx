import './style.css'

function PersPage({val}) {
    return <div className="galleryStyle">
        <h1>{val.name}</h1>
        <p>Телефон:{val.phone}</p>
        <p>Email: {val.email}</p>
        <p>Город:{val.city}</p>
        <img src={val.photo} alt="" />
    </div>
}

export default PersPage;