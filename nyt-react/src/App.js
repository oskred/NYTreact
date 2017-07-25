import React, { Component } from 'react';
import Child1 from './components/child1';
import Child2 from './components/child2';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h2>New York Times Article Search</h2>
              <p> Search for and annotate articles of interest </p>
        </div>
            <Child1 />
            <Child2 />
      </div>

    );
  }
}

export default App;
