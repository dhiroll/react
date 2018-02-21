import React, {
  Component
} from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className="searchBarContainer">
        <form className="form-inline">
          <input className="form-control" type="text" placeholder="Search" />
          <button className="btn searchBtn" type="submit">Search</button>
        </form>
      </div>

    );
  }
}

export default SearchBar;