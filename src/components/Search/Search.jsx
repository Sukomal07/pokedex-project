function Search({ text }) {
    return (
        <div className="search-container">
            <input id="search-box" type="text" placeholder="Enter Pokemon name..." onChange={(e) => text(e.target.value)} />
        </div>
    )
}

export default Search