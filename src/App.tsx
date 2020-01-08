import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import ReactGA from "react-ga";
import "./App.css";
import { IMainInfo } from "./Models/MainInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

interface Props {}
interface IResumeData {
  main: IMainInfo;
  resume: any;
  portfolio: any;
  testimonials: any;
}
interface State {
  foo: string;
  resumeData: IResumeData;
}

class App extends Component<Props, State> {
  static defaultProps = {};
  state: State = {
    foo: "bar",
    resumeData: {} as any
  };

  constructor(props: Props) {
    super(props);
    ReactGA.initialize("UA-154318328-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(this: App, data: IResumeData) {
        console.log(data);
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
