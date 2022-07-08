// import React, { Component } from "react";
// import Login from "./Login";
// class Class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964,
//     };
//     console.log("constructor");
//   }

//   changeColor = () => {
//     this.setState(
//       this.state.color === "red" ? { color: "blue" } : { color: "red" }
//     );
//   };
//   getSnapshotBeforeUpdate() {
//     console.log("getSnapshotBeforeUpdate");

//     return { name: "sagar" };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(prevProps, prevState, snapshot);
//     console.log("hello componentDidUpdate");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         {console.log("return")}
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//         <Login />
//       </div>
//     );
//   }
// }
// export default Class;

import React, { Component } from "react";
import Counter1 from "./Counter1";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount:When  component render first time");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount:Component Removed");
  }

  render() {
    return (
      <div>
        <Counter1 number={this.state.count}></Counter1>
        {/* <button
          onClick={() => {
            this.increment();
          }}
        >
          Click
        </button> */}
      </div>
    );
  }
}
