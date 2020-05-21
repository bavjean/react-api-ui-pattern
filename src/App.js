import React, { Component } from 'react';
import './App.css';

// 17e1ce7203378146f8047eb9a4498b73
class App extends Component {

  componentDidMount() {
    let url = "https://api.openbrewerydb.org/breweries?by_state=District_of_Columbia"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  
  render () {
    return (
     <div>
       <h1>Breweries in DC</h1>
     </div>
   );
  }
}

export default App;
