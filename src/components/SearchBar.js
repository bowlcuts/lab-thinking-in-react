import { useState } from "react";

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    const searchChange = (event) => {
        setSearch(event.target.value)
        props.searchProducts(event.target.value)
    }

    return (
        <>
        <div>
            <label>Search</label>
            <input onChange={searchChange}
            type="text"
            value={search}
            /> 
        </div>
        <div>
            <input type="checkbox" value={isChecked} onChange={(element) => {
                setIsChecked(!isChecked)
                props.itemsStock(!isChecked)
            }} />
            <p>In stock</p>
        </div>
        </>
    );
};

export default SearchBar;