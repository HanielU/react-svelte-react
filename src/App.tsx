import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `New Messages(${value})`;
    console.log("ranin useeffect useEffect");
  });

  console.log("render component");

  return (
    <div className="p-8 w-full h-full">
      <h1 className="mb-5 font-semibold text-2xl">Value form useState</h1>
      <div className="mb-8">
        <div className="bg-base-200 rounded-lg mb-5 p-4">
          <h1>{value}</h1>
        </div>

        <div className="flex">
          <button className="btn mr-2" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button className="btn mr-2" onClick={() => setValue(0)}>
            Reset
          </button>
          <button
            className="btn mr-2"
            onClick={() => {
              console.log("ran in func");
              setValue(9);
              console.log(value);
            }}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

function getArr() {
  return [
    { id: 1, name: "Haniel" },
    { id: 2, name: "Isabel" },
    { id: 3, name: "Jemima" }
  ];
}
