import React ,{ Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    //state cua thang con
    this.state = {
      count: 0,
      data: [],
    };
  }
  //thay doi state
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // moi lan thay doi state thi chay lai render
  componentDidMount() {
    console.log("Did mount"); // chay sau khi render (thuong dung lay API)
  }
  componentWillUnmount() {
    console.log("Will Unmount"); // chay sau khi component bien mat hoac bi unmount (refresh giao dien)
  }
  render() {
    console.log("render");
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
