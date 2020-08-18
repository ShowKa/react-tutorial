import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "ShowKa" };
  }
  render() {
    const title = "Welcome to React Tutorial"
    setTimeout(() => {
      this.setState({ name: "ShowKa2 : state.name updated!" });
    }, 1000);
    return (
      <div>
        <Header title={title} />
        {this.state.name}
        <Footer />
      </div>
    );
  }
}
