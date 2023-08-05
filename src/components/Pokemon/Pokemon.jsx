import { Link } from "react-router-dom"

function Pokemon({ name, image, id }) {
    return (
        <div className="grid">
            <Link to={`/pokemon/${id}`}>
                <h1>{name}</h1>
                <img src={image} alt={name} className="pokemon-img" />
            </Link>
        </div>
    )
}

export default Pokemon