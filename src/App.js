import React, {Component} from 'react';
import './App.css';
import PressureTransientChart from './charts/Dygraph'
import chartData from './mock-data/sample-data.json'
import chartConfig from './mock-data/chartConfig.json'

class App extends Component {
  render() {
    return (
      <div className="App">
          <PressureTransientChart chartData={chartData} chartConfig={chartConfig}/>
      </div>
    );
  }
}

export default App;
