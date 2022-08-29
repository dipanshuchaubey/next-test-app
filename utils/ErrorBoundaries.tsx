import React, { Component } from "react";
import { logClientError } from "./logSentryError";

export interface ErrorProps {
  children: React.ReactElement;
}

type ErrorState = {
  error: boolean;
  message: string;
};

export default class ErrorBoundaries extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);

    this.state = {
      error: false,
      message: "",
    };
  }

  static getDerivedStateFromError() {
    return { error: true, message: "Something went wrong" };
  }

  componentDidCatch(error: any): void {
    logClientError(error);
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.message}</h1>;
    }

    return this.props.children;
  }
}
