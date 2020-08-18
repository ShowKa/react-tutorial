import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }
  changeTitle(title) {
    this.setState({ title }); // {title: title}
  }
  // Headerコンポネントに changeTitle()をchangeTitleというプロパティに渡している。
  // bind(this) とすることで、Header#changeTitle内でこのLayoutインスタンスを扱える。
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
