import React from 'react';
import ReactDOM from 'react-dom';
import { Knob, BiDirectionalKnob } from './Knob';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value0: 127,
      value1: 63,
      value2: 10,
      value3: 10,
      value4: 10,
      value5: 10,
      value6: 10,
    };
  }
  render() {
    return (
      <div>
        <BiDirectionalKnob
          value={this.state.value0}
          onChange={(newValue) => { this.setState({ value0: newValue }); }}
        />
        <BiDirectionalKnob
          value={this.state.value1}
          onChange={(newValue) => { this.setState({ value1: newValue }); }}
        />
        <Knob
          value={this.state.value2}
          onChange={(newValue) => { this.setState({ value2: newValue }); }}
        />
        <Knob
          value={this.state.value3}
          onChange={(newValue) => { this.setState({ value3: newValue }); }}
        />
        <Knob
          value={this.state.value4}
          onChange={(newValue) => { this.setState({ value4: newValue }); }}
        />
        <Knob
          value={this.state.value5}
          onChange={(newValue) => { this.setState({ value5: newValue }); }}
        />
        <Knob
          value={this.state.value6}
          onChange={(newValue) => { this.setState({ value6: newValue }); }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
