import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Dick": "best_match",
    "Highest Ass": "rating",
    "Most Gumbylike": "review_count"
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });   
    }

    render() {
       return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Through all of Jesses Bullshit" />
            <input placeholder="Where? Up his ass!" />
          </div>
          <div className="SearchBar-submit">
            <a href='www.#.com'>Sniff my floater!!!!!!!!!</a>
          </div>
        </div>
       ) 
    }
}


export default SearchBar;