import React, { useState, useEffect } from "react";

export default function CounterHook() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    { name: "tanle", tuoi: "lon" },
    { name: "kien", tuoi: "khi" },
  ]);
  console.log("data", data);
  const [search, setSearch] = useState("");

  // componentDidMount
  //componentWillUnMount
  useEffect(() => {
    if (search) {
      const newData = data.filter((x) => x.name.includes(search)); // includes(autocomplete)
      return setData(newData);
    }
    return setData([
      { name: "tanle", tuoi: "lon" },
      { name: "kien", tuoi: "khi" },
    ]);
  }, [search]); // empty,[],[x] x : bien thay doi
  console.log("render");
  return (
    <div>
      <div>{count}</div>
      <div>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log("event", e);
        }}
      />
      {/* e: event */}
      <button
        onClick={(e) => {
          setCount(count + 1);
          console.log("event", e);
        }}
      >
        Click
      </button>
    </div>
  );
}
