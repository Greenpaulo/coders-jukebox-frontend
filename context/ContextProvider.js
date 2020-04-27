import React, { Component } from 'react';
import { GlobalContext } from './GlobalContext';

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { value } = this.props;
    return (
      <GlobalContext.Provider value={value}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default ContextProvider;