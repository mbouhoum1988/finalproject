import React from "react"

const Search = (props) => {
    return (
      <div className="search-box">
            <h3>Search for places to visit</h3>
            <p></p>
            <input 
                    className="form-control" 
                    placeholder="search"
                    name="search"
                    value={props.name}
                    onChange={props.handleInput} />
            <button 
                className="btn btn-primary btn-search"
                onClick={props.handleClick}
                > Search </button>
      </div>
    )
  }


export default Search
