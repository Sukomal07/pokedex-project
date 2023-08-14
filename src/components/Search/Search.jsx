import useDebounce from "../../hooks/useDebounce"

function Search({ text }) {
    const debounce = useDebounce((e) => text(e.target.value))
    return (
        <div className="search-container">
            <input id="search-box" type="text" placeholder="Enter Pokemon name or id..." onChange={debounce} />
        </div>
    )
}

export default Search