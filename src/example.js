import data from './data/example.json';
import {Card,CardBody} from 'reactstrap';
import React, { Component } from 'react'

export default class Example extends Component {
  constructor() {
    super();
    this.state = { color: "pink" };
  }

  WriteData(data, index) {
      // firstName'e tiklandiktan sonra ki fonksyion:
        // var a = document.createelement
        // arguments.innerHTML = lastname
        // index;in oldugu class'a appendchild yapacaksin
    var firstName = data.firstName;
    var Lastname = " ";
    console.log(index);

    return <div className={index}>{firstName}</div>;
    
  }
  render() {
    //var newdata = JSON.parse(data);
    console.log(data);
    // for (let i = 0; i < 5; i++) {
    //   console.log(data[i.toString()]);
    // }
    return (
      <div>
        <h1>123qweqwe</h1>
        <h1
          onClick={() => {
            let x = document.getElementsByTagName("body")[0];
            x.style.backgroundColor = this.state.color;
          }}
        >
          <input
            className="form-control"
            type="text"
            value={this.state.color}
            id={"todoName" + this.props.id}
            onChange={(e) => this.setState({ color: e.target.value })}
          />

          {this.state.color}
        </h1>
        {data.map((e, index) => this.WriteData(e, index))}
      </div>
    );
  }
}

