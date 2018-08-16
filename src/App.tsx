import * as React from 'react';

export interface AppProps {
  compiler: string; 
  framework: string;
};

export interface AppState {};

// 'AppProps' describes the shape of props.
// 'AppState' describes the shape of state.
export default class App extends React.Component<AppProps, AppState> {

  render() {
    return (
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    );
  }
};