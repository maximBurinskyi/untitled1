import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Buttons from "./components/buttons/Buttons";
import ResetButton from "./components/buttons/ResetButton";
import Reset from "./components/reset/Reset";
import Deletion from "./components/deletion/Deletion";
import Addlot from "./components/addlot/Addlot";
import Dellot from "./components/dellot/Dellot";


class App extends React.Component{
  constructor(props) {
    super(props);
    // console.log('constructor');
    // console.log('props');
    this.state = {
      count : 0,
      data : null,
      value: 0
    };
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }
  // componentWillUnmount() {
  //
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentDidUpdate prevProps');
  //   console.log('prevprops');
  //   console.log('componentDidUpdate prevState');
  //   console.log('revState');
  // }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  handleChange(event) {
    this.setState({value:event.target.value});
  }

  handleSubmit(event) {
    alert("Пользователь ввел такое число:" + this.state.value);
    event.preventDefault()

    // this.setState({
    //   count: this.state.value
    // })
  }



  handler=() => {
    this.setState({
      count: this.state.count+1

    })
  }

  deletion =() => {
    this.setState({
      count: this.state.count-1

    })
  }
  addlot = () => {
    this.setState({
      count:this.state.count + 100
    })
  }

  dellot = () => {
    this.setState({
      count:this.state.count - 100
    })
  }

  reset = () => {
    this.setState({
      count: this.state.count = 0
    })
  }

  // handler2=() => {
  //   this.setState({
  //     count: this.state2.count-1
  //   })
  // }

  render() {
    const {msg, func} = this.props;
    const {count} = this.state;

    // const {reset} = this.reset;

    this.props.func();
    console.log('render');

    return (
        <div className="App">
          <h1> {msg} </h1>
          <Count count ={count}/>
          <Buttons myFunc={this.handler}/>
          <Deletion myFunc3 = {this.deletion}/>
          {<Addlot myFunc4={this.addlot}/>}
          {<Dellot myFunc5={this.dellot}/>}
          <Reset myFunc2={this.reset}/>

          <form>
            <h1>Entered text by user: {this.state.username}</h1>
            <p>Enter your name:</p>
            <input
                type='text'
                onChange={this.myChangeHandler}
            />
          </form>
          {/*<form onSubmit={this.handleSubmit}>*/}

          {/*  <label>*/}
          {/*    Введите число:*/}
          {/*    <input type="text" value={this.state.value} onChange={this.handleChange } />*/}
          {/*  </label>*/}
          {/*  <input type="submit" value="Отправить" />*/}
          {/*</form>*/}
        </div>



          // {/*<Reset reset ={reset}/>*/}

          // <ResetButton myFunc2={this.handler2}/>



    );
  }

}

export default App;
