import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper #689f38 light-green darken-2">
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