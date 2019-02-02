import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Loader from "./Loader";

//Class Component:
class App extends React.Component {
  //State Define
  state = { lat: null, errorMesseage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMesseage: err.message })
    );
  }

  renderContent() {
    //1. If there isnt lat data:
    if (!this.state.lat && this.state.errorMesseage) {
      return (
        <div>
          <h1>Error:{this.state.errorMesseage}</h1>
        </div>
      );
    }

    if (this.state.lat && !this.state.errorMesseage) {
      //Pass the LAT as PROPS to the SeasonsDisplay component:
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
