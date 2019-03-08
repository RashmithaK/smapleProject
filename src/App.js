import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pearson:[]
    }
  }
  
  componentDidMount(){
    Axios.get("http://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res);
      this.setState({pearson: res.data})
    })
  }
  render() {
    return (
      <div>
        {this.state.pearson.map(pearson =>
        <li>id: {pearson.id}<br/>
        name: {pearson.name}<br/>
        email: {pearson.email}<br/>
        phone: {pearson.phone}<br/>
        </li>
        )}
      </div>
    );
  }
}

export default App;
