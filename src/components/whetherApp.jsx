import "./whetherApp.css";
import { Component } from "react";

class WhetherApp extends Component {
  state = {
    whetherList: [],
    city: "hyderabad",
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { city } = this.state;
    try {
      const api = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dd507d2b25b3fc6259d7ed945c19683c`;
      const response = await fetch(api);
      const jsonData = await response.json();
      this.setState({ whetherList: jsonData });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { whetherList } = this.state;
    console.log(whetherList);
    return (
      <div className="main-container">
        <h1>whether app</h1>
        <ul className="list-container">
          <li>whether list</li>
        </ul>
      </div>
    );
  }
}
export default WhetherApp;
