import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div id="brand">
          good<strong>books</strong>
        </div>
        <div className="nav-items">
          <div>Home</div>
          <div>My Books</div>
          <div>
            Browse <i className="fas fa-caret-down"></i>
          </div>
          <div>
            Community <i className="fas fa-caret-down"></i>
          </div>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search books" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="nav-items">
          <div>Sign In</div>
          <div>Join</div>
        </div>
      </div>
    </nav>
  );
}
