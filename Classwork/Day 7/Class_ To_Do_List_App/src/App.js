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
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name;
    let updatedListOfNames = this.state.listOfNames;
    updatedListOfNames.push({name, isStarred: false});

    this.setState({
      listOfNames: updatedListOfNames
    })

    let text = this.refs.text;
    text.value = "";
    console.log("This new list of names: ", this.state.listOfNames);
  }


  handleRemove(i, event){
    console.log("i is ", i);
    let index = i;
    let listOfNames = this.state.listOfNames;
    
    var updatedListOfNames = listOfNames.filter((item, i, array) => {
      return item !== array[index];
    });

    this.setState({
      listOfNames: updatedListOfNames
    })
  }

  handleStar(i, event){
    let listOfNames = this.state.listOfNames;
    listOfNames[i].isStarred = !listOfNames[i].isStarred;
    this.setState({
      listOfNames
    })
  }

  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map((list, i) => (<li key={i}><i class="far fa-star" className={(list.isStarred) ? "fas fa-star" : "far fa-star"} onClick={this.handleStar.bind(this, i)}></i>       {list.name}       <i class="far fa-times-circle" onClick={this.handleRemove.bind(this, i)}></i></li>));

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
        </form>
        <ul>
          { (name) ? name : null }
        </ul>
      </div>
    );
  }
}

export default App;
