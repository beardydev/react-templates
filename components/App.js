import React from 'react';

// Template
import Template from './Template';

// Child components
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Template
        header={<Header title="Header"/>}
        content={children}
        footer={<Footer title="Footer"/>}
      />
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
