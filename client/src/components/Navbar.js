import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-2">
          <a href="/" className="brand-logo">React Books</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/search/">Search</a></li>
            <li><a href="/saved/">Saved Books</a></li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Navbar