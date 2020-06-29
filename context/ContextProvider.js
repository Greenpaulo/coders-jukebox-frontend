import React, { Component } from 'react';
import { GlobalContext } from './GlobalContext';
import { AnimatePresence } from 'framer-motion';

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
        <AnimatePresence exitBeforeEnter >
          {this.props.children}
        </AnimatePresence>
      </GlobalContext.Provider>
    );
  }
}

export default ContextProvider;