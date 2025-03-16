import React from "react";
import Greeting from "./components/greetings";
import Counter from "./components/counter";

const App: React.FC = () => {
  return (
    <div>
      <h1>My React TypeScript App</h1>
      <Greeting name="John" />
      <Counter />
    </div>
  );
};

export default App;
