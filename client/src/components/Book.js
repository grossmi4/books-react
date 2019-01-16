import React from 'react';

const Book = props => {
  const buttonSelector = () => {
    if( props.cardType === "save" ) {
      return (
        <button id={props.id} onClick={props.handleSave} className="waves-effect waves-light light-green darken-4 btn">Save</button>
      )
    }
    else {
      return (
        <button id={props.id} onClick={props.handleDelete} className="waves-effect waves-light light-green darken-4 btn">Remove from Saved</button>
      )
    }
  };

  return (
    <div className="col s12">
      <h2 className="header light-green-text text-darken-4">{props.title}</h2>
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
            <a href={props.link} className="light-green-text text-darken-2">More Info</a>
            {buttonSelector()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Book;