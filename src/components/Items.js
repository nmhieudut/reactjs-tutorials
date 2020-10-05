import React, { Component } from "react";

export default class Items extends Component {
     
  render() {
    const data = this.props.data;
    const arr = [1, 2, 3, 4, 5, 6];
    const arr1 = arr.map(function (x) {
      return x * 2;
    });

    const arr2 = arr.filter(function (x) {
      return x % 2 === 0;
    });

    const arr3 = arr.reduce(function (total, x) {
      return total + x;
    }, 0);
    console.log("arr1:", arr1); // [2,4,6,8,10,12]
    console.log("arr2:", arr2); // [2,4,6]
    console.log("arr3:", arr3); // 21
    console.log(this.props); // {name:'tanle',duongvat:'conket'}
    return (
      <div>
        {data.length === 0 ? (          //conditional rendering(render co dieu kien)
          <div>Nothing</div>
        ) : (
          data.map(function (x) {
            return (
              <li>
                {x.name} {x.tuoi}
              </li>
            );
          })
        )}
        {/* {data.map(function (x) {
          return (
            <li>
              {x.name} {x.tuoi}
            </li>
          );
        })} */}
      </div>
    );
  }
}
