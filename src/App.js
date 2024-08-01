import React from "react";
import "./App.css";

function ParentComponent({ childTitle }) {
  const [value, setValue] = React.useState(0);
  //const ChildTitle = React.useMemo(() => childTitle, [childTitle]); -- You can't create a constant which is String - immutable with usememo
  console.log("Parent rendering");
  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Variable">{value}</span>
      </h1>

      <ChildComponent title={childTitle} />
      <button
        onClick={() => {
          setValue((value) => value + 1);
        }}
      >
        Update State on Parent ++
      </button>
    </div>
  );
}

const ChildComponent = React.memo(({title}) => {
  console.log("Child rendering");
  return (
    <div className="Component">
      <h1>
        Child Title: <span className="Variable">{title}</span>
      </h1>
    </div>
  );
});

export default function App() {
  return (
    <div>
      <ParentComponent childTitle={"Child Component"}  />
    </div>
  );
}
