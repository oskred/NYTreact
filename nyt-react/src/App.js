import React, { Component } from 'react';
import Child1 from './components/child1';
// import child2 from 'child2.js';
// import child3 from 'child3.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h2>New York Times Article Search</h2>
              <p> Search for and annotate articles of interest </p>
        </div>
            <Child1 />
      </div>

    );
  }
}

export default App;
