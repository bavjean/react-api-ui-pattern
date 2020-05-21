import React, { Component } from 'react';
import Header from './Header'
import './App.css';

// 17e1ce7203378146f8047eb9a4498b73
class App extends Component {

constructor(){
  super()

  this.state = {
    breweries: []
  }
}

  componentDidMount() {
    let url = "https://api.openbrewerydb.org/breweries?by_state=District_of_Columbia"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({breweries: data})
      console.log(this.state.breweries)
    })
  }
  
  render () {
    return (
     <div>
       <Header />
       <div>

       </div>
     </div>
   );
  }
}

export default App;
