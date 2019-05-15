import { Component } from "react";
import { Meta, Header, Footer, Home } from "../components";

export default class Index extends Component {
  componentDidMount() {
    console.log(this.rellax);
  }

  render() {
    return (
      <>
        <Meta />
        <Header color="#fff" isHome />
        <Home.Hero />
        <Home.Work />
        <Home.About />
        <Footer />
      </>
    );
  }
}
