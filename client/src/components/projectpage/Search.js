import React from "react"

const Search = (props) => {
    return (
      <div className="search-box">
            <h3>Search For Places To Visit</h3>
            <p></p>
            <input 
                    className="form-control" 
                    placeholder="Search"
                    name="search"
                    value={props.name}
                    onChange={props.handleInput} />
            <button 
                className="btn-primary btn-search"
                onClick={props.handleClick}
                > Search </button>
      </div>
    )
  }


export default Search
