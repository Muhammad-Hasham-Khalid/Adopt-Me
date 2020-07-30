//mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStatefromError() {
    // gets called whenever there is an error inside of it (children)
    // function built in with React

    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    // After component updates
    // not called for initial render
    // is called when props change or state change (very much similar to useEffect)

    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was error with this listing. <Link to="/">Click here</Link> to
          go back to the home page or wait 5 secondss
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
