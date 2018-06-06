import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      listOfNames: []
    }
  }

  handleChange(event){
    const name = event.target.value;
    this.setState({
      name
    })
    // console.log( "this is the name in the handleChange: ", this.state.name )
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name;
    let updatedListOfNames = this.state.listOfNames;
    updatedListOfNames.push(name);
    this.setState({
      listOfNames: updatedListOfNames
    })
    let text = this.refs.text;
    text.value = "";
    console.log("This new list of names: ", this.state.listOfNames);
  }


  handleRemove(event){
    event.preventDefault();
    const name = this.state.name;

    function remove(array, element) {
      return array.filter(e => e !== element);
    }

    let listOfNames = this.state.listOfNames;
    let updatedListOfNames = remove(listOfNames, name);

    this.setState({
      listOfNames: updatedListOfNames
    })
  }

  handleStar(event){
    event.preventDefault();
    const name = this.state.name;

    
  }

  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map((name, i) => (<li>{name}</li>));

    return (
      <div className="App">
        <p className="App-intro">
          To-Do List App
        </p>
        <form>
          <label>
            Name: <br /> <br />
            <input onChange={this.handleChange.bind(this)} type="text" name="name" ref="text" />
          </label>
            <br/><br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
            <input type="button" value="Remove" onClick={this.handleRemove.bind(this)}/>
        </form>
        <ul>
          { (name) ? name : null }
        </ul>
      </div>
    );
  }
}

export default App;
