import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
    };
  }

  render() {
    const { view } = this.state;
    return (
      <div>
        {view ? <div>React rendered</div> : ''}
      </div>
    );
  }
}

export default App;
