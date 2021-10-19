import React from 'react';

import Header from './Header';

class App extends React.Component {
  state = { pageHeader: 'Naming Contest' };
  componentDidMount() {
    console.log('did Mount');
    debugger;
  };
  componentWillUnmount() {
    console.log('will Unmount');
    debugger;
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          - - - - -
        </div>
      </div>
    );
  }
}

export default App;