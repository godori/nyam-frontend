import React, { Component } from "react";
import "./App.css";
import Card from "./components/card";
import WriteForm from "./components/writeForm";
import { connect } from "react-redux";
import ReduxTest from "./components/reduxTest";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getCards();
  }

  _getCards = async () => {
    const cards = await this._callApi();
    this.setState({
      cards
    });
  };

  _callApi = () => {
    return fetch("http://localhost:3000/cards")
      .then(result => result.json())
      .catch(err => console.log(err));
  };

  _renderCards = () => {
    const cards = this.state.cards.map(card => {
      return <Card key={card._id} data={card} />;
    });
    return cards;
  };

  _renderLoading = () => {
    return <h1>Loading...</h1>;
  };

  render() {
    const { cards } = this.state;
    {
      console.log(cards);
    }
    return (
      <div className={cards ? "App" : "Loading"}>
        {this.state.cards ? this._renderCards() : this._renderLoading()}
      </div>
    );
  }
}

export default App;
