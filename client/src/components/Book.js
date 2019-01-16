import React from 'react';

const Book = props => {
  return (
    <div className="col s12 m7">
      <h2 className="header">{props.title}</h2>
      <div className="card horizontal">
        <div className="card-image">
          <img src={props.image} alt="missing picture"/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>Author(s): {props.authors}</p>
            <p>{props.description}</p>
          </div>
          <div className="card-action">
            <a href={props.link}>Link to book</a>
            <button id={props.id} onClick={props.handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Book;