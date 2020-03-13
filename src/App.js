import React, {useEffect} from 'react';
// import ScriptTag from 'react-script-tag';
// import useProgressBar from "./hooks/useProgressBar";
import Recompose from 'recompose'

//import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js'
// import {ProgressBar} from 'scripts/progressBar.js'
// import ProgressBarComponent from './components/ProgressBarComponent';
import ProgressBar from "./components/ProgressBar/index";

function App() {
    const [hello, setHello] = React.useState({
        hello: "loading..."

    });

    const [number, setNumber] = React.useState({
        number: 0
    });

    const [results, setResults] = React.useState({ //TODO: continue working from here
        results: []
        // was results: "loading..."
    });

    useEffect(() => {
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
            .then(json => setHello(json));
        fetch('http://localhost:5000/number',
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then(json => setNumber(json));
        fetch('http://localhost:5000/lstm',{
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then(json => setResults(json)) //a JSON is passed here --> //was .then(json => setResults(json))
    }, []);


    return (
        <div>
            <div className="rec-system">
                <div className="navbar">
                    <a href="#information">Information</a>
                    <a href="#statistics">Statistics</a>
                    <a href="#training">Training</a>
                </div>
                <div className="rec-system-title">
                    <h1>Recommender system</h1>
                </div>
                <div className="description">
                    <a name="information">
                        <h3>LSTM convolutions for sequence-based recommendations</h3>
                    </a>
                    <p>
                        In this example of a recommender system we'll be using lstm
                        convolutions for sequence-based recommendations
                    </p>
                    <h3>General LSTM results</h3>
                    <div className="lstm-table-info-container">
                        <p>
                            The LSTM-based model runs an LSTM along a user's
                            interactions, using the hidden state for prediction
                            of the next element at each step. The results are as follows:
                        </p>


                        <table className="lstm-table">
                            <tr>
                                <th><a name="statistics">validation_mrr</a></th>
                                <th>test_mrr</th>
                                <th>batch_size</th>
                                <th>embedding_dim</th>
                                <th>l2</th>
                                <th>learning_rate</th>
                                <th>loss</th>
                                <th>n_iter</th>
                            </tr>
                            <tr>
                                <td align="center">0.082913</td>
                                <td align="center">0.0763708</td>
                                <td align="center">16</td>
                                <td align="center">64</td>
                                <td align="center">0</td>
                                <td align="center">0.01</td>
                                <td align="center">adaptive_hinge</td>
                                <td align="center">15</td>
                            </tr>
                            <tr>
                                <td align="center">0.078108</td>
                                <td align="center">0.0808093</td>
                                <td align="center">256</td>
                                <td align="center">32</td>
                                <td align="center">0</td>
                                <td align="center">0.05</td>
                                <td align="center">adaptive_hinge</td>
                                <td align="center">11</td>
                            </tr>
                            <tr>
                                <td align="center">0.0769014</td>
                                <td align="center">0.0791023</td>
                                <td align="center">32</td>
                                <td align="center">16</td>
                                <td align="center">1e-06</td>
                                <td align="center">0.01</td>
                                <td align="center">adaptive_hinge</td>
                                <td align="center">13</td>
                            </tr>
                            <tr>
                                <td align="center">0.0756949</td>
                                <td align="center">0.0708071</td>
                                <td align="center">16</td>
                                <td align="center">64</td>
                                <td align="center">1e-05</td>
                                <td align="center">0.01</td>
                                <td align="center">adaptive_hinge</td>
                                <td align="center">12</td>
                            </tr>
                            <tr>
                                <td align="center">0.0734895</td>
                                <td align="center">0.0753369</td>
                                <td align="center">256</td>
                                <td align="center">8</td>
                                <td align="center">1e-05</td>
                                <td align="center">0.01</td>
                                <td align="center">adaptive_hinge</td>
                                <td align="center">10</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            <div className="rec-system rec-system-res">
                <h3><a name="training">Running the lstm recommendation system:</a></h3>
                <div className="lstm-model">
                    <h3>Choose a model: </h3>
                    <div className="run-model-controls">
                        <div className="run-model-controls-container">
                            <div className="run-model-controls-container-flex">
                                <select name="chosen-model" id="selector-models">
                                    <option value="lstm">LSTM</option>
                                </select>
                            </div>
                            <button id="start-button">Run the model</button>
                        </div>
                    </div>
                    <div id="output-section">
                        {/*<p> hello {hello.hello}</p>*/}
                        {/*<p> number {number.number} </p>*/}
                        <p id="result"> result {results.results} </p>
                    </div>
                </div>
                {/*<div className="progress progress-bar">{useProgressBar('./scripts/initProgressBar.js')}</div>*/}
                {/*this one works*/}
                {/*percentage={}*/}
                {/*It's too hard for you to implement */}
                {/*<ProgressBar/>*/}
                {/*<ProgressBarComponent></ProgressBarComponent>*/}
                <footer>&copy; made by M.P.</footer>
                {/*<ScriptTag type={"text/javascript"} src={"scripts/initProgressBar.js"}/>*/}
            </div>
        </div>
  );
}

export default App;
