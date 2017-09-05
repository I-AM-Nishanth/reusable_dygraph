import Dygraph from 'dygraphs';
import React, {Component} from 'react';
import 'dygraphs/dist/dygraph.min.css'
class PressureTransientChart extends Component {

  componentDidMount() {
    const {chartConfig, chartData} = this.props;
    let structuredChartData = chartData.map(function(dateString) {
      return [
        new Date(dateString[0]),
        dateString[1]
      ]
    });
    this.graph = new Dygraph(this.refs.chart, structuredChartData, chartConfig)
  }

  toggleTicker = (id, el) => {
    this.graph.setVisibility(id - 1, el.target.checked);
  }

  render() {
    return (
      <div className="chartContainer">
        <h2>Resuable DyGraph component</h2>
        <div ref='chart' className="chartComponent"/>
      {
        this.props.chartConfig.labels.map((label, index) => {
          if (index !== 0) {
            return (
              <p key={index}>
                <input type="checkbox" id={index} onClick={this.toggleTicker.bind(this, index)} defaultChecked={true}/>
                <label key={index}>{label}</label>
              </p>
            )
          } else {
            return <p key={index}></p>
          }
        })
      }
      </div>
    );
  }
}

export default PressureTransientChart;
