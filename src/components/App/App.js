import React from 'react';
//import logo from '../../logo.svg'; commenting out for now
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>PJ's Dick Diner</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    );
  }  
}
  
export default App;