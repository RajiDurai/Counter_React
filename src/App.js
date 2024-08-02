import React from "react";
import "./App.css";

function ParentComponent({ childTitle }) {
  const [value, setValue] = React.useState(0);
/*const ChildTitle = React.useMemo(() => childTitle, [childTitle]); 
1. Memoizing values is not here on a constant String - immutable
2. The child is re-rendered everytime eventhough the value is memoized due to each time the reference change on parent state
3. can memoize onclick function or any expensive compuation using useCallback() if needed */
  console.log("Parent rendering");
  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Variable">{value}</span>
      </h1>

      <ChildComponent title={childTitle} />
      <button
        onClick={() => {
          setValue((value) => value + 1); // can move this to a callback function
        }}
      >
        Update State on Parent ++
      </button>
    </div>
  );
}

/*Passes the child component to React.Memo to prevent re-rendering the child when parent state changes. This is expensive but the cost on re-rendering everytime with parent is more expendive*/
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
  console.log("Root rendering");
  return (
    <div>
      <ParentComponent childTitle={"Child Component"}  /> {/* removed className = "App" as the props is not used anywhere*/}
    </div>
  );
}
