import React, { Component } from 'react';
import StatsCard from './components/statsCard';
import './App.css';

class App extends Component {
  state = {  }

  componentDidMount() {
    document.title = 'Stats Preview Card Component';
  }

  render() { 
    return (
      <React.Fragment>
        <StatsCard />
      </React.Fragment>
    );
  }
}
 
export default App;