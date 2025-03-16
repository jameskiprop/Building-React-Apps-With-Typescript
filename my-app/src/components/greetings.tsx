import React from "react";

// Defining prop types using an interface
interface GreetingProps {
  name: string; // making the 'name' prop to be a string
}

// Functional component with TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
