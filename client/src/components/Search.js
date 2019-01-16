import React from 'react';

const Search = props => {
    return (
      <div className="topmargin-small">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="search"
                  placeholder="Search for a book"
                  id="book_search"
                  type="text"
                  className="validate"
                  onChange={props.handleInputChange}
                  value={props.search}
                />
                  <label htmlFor="book_search">Book Search</label>
              </div>
            </div>
            <div className="row">
              <div className="col s3 offset-s9">
                <button onClick={props.handleSubmit} className="waves-effect light-green darken-2 btn">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};
export default Search