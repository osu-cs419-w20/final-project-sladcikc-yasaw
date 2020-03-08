import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


class ApiData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      greeting: ''
    }
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

/*   componentDidMount(){
    console.log("blah");
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=574F7810E04E32E957BD5947BC5A6CB0&steamids=76561198013760344`, { crossdomain: true})
    .then(res => {
      const steam = res.data;
      this.setState({steam});
    })
  }; */

  handleChange(event){
    this.setState({ name: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(res => res.json())
      .then(state => this.setState(state));
  }
  render(){
    return(<div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input id="name" type="text"
        value={this.state.name}
        onChange={this.handleChange} />
        <button type="submit">submit</button>
      </form>
      <p>{this.state.greeting}</p>
      </div>
    )
  }

}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Steam Account Project CS419
        </p>
         <ApiData /> 
      </header>
    </div>
  );
}

export default App;
//574F7810E04E32E957BD5947BC5A6CB0