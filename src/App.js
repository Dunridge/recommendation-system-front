import React, {useEffect} from 'react';


//TODO: make the app run from here --> you have a problem: you need to use yarn to run your React app from here but WebStorm uses npm
//import logo from './logo.svg';
import './App.css';

function App() {
    const [hello, setHello] = React.useState({
        hello: ""
    });

    useEffect(() => { // TODO: get in the concept of promises
        fetch('http://localhost:5000/',
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then(json => setHello(json))
    }, []);
  return (
    <div>
        hello {hello.hello}
    </div>
  );
}

export default App;
