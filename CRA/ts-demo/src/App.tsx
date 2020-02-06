import React from 'react';
import logo from './logo.svg';
import './App.css';

interface GreetingProps {
  peopleToGreet: string[];
}

const App = () => {
  const peopleToGreet = ["Nate", "Nathan", "Eric", "Sami", "Kevin", "Brian"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greetings peopleToGreet={peopleToGreet} />
    </div>
  );
}

const Greetings = (props: GreetingProps) => {
  return <>
   {props.peopleToGreet.map((person: string)  => <div>Hello {person}!</div>)}
   </>
}

export default App;
