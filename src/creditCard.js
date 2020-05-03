import React, { Component } from "react";

import "./creditCard.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardnumber: "",
      cardholder: "",
      expirationDate: "",
      nameError: "",
      cnStars: "**** **** **** ****",
      DateDefault: "MM/YY",
    };
  }

  cnChange = (e) => {
    setInterval(() =>
      this.setState({
        cardnumber: this.state.cardnumber
          .replace(/\D/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim(),
      })
    );
    setInterval(() =>
      this.setState({ cardnumber: this.state.cardnumber.slice(0, 19) })
    );
  };

  nameChange = (e) => {
    setInterval(() =>
      this.setState({
        cardholder: this.state.cardholder.replace(/[^a-z]/gi, " "),
      })
    );
    setInterval(() =>
      this.setState({
        cardholder: this.state.cardholder.slice(0, 22).toUpperCase(),
      })
    );
  };

  expirationDateChange = (e) => {
    setInterval(
      () =>
        this.setState({
          expirationDate: this.state.expirationDate.slice(0, 5),
        }),
      100
    );
    setInterval(
      () =>
        this.setState({
          expirationDate: this.state.expirationDate
            .replace(/\D/g, "")
            .replace(/(.{2})/, "$1/")
            .trim(),
        }),
      100
    );
  };
  nameHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    // message error for

    if (this.state.cardholder.length < 4) {
      this.setState({ nameError: "dude, the name is too short, sorry " });
    } else {
      this.setState({ nameError: "" });
    }
  };
  cnhandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    // replacing with stars for rib
    let Stars = "********************".split("");
    Stars.unshift(event.target.value);
    for (let i = 0; i < event.target.value.length; i++) {
      Stars.pop();
    }

    let cnStars2 = Stars.join("");

    this.setState({ cnStars: cnStars2 });
  };
  dateHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    //replacing with strings with date
    let DateDefault = "MM/YY*".split("");
    DateDefault.unshift(event.target.value);
    for (let i = 0; i < event.target.value.length + 1; i++) {
      DateDefault.pop();
    }
    let DateDefault2 = DateDefault.join("");

    this.setState({ DateDefault: DateDefault2 });
  };

  render() {
    return (
      <div>
        <label>card number</label>
        <input
          name="cardnumber"
          type="text"
          value={this.state.cardnumber}
          onChange={this.cnhandler}
          onFocus={this.cnChange}
        />
        <p>{this.state.cnError}</p>

        <label>card holder</label>
        <input
          name="cardholder"
          type="text"
          value={this.state.cardholder}
          onChange={this.nameHandler}
          onFocus={this.nameChange}
        />
        <p
          style={{
            color: "red",
          }}
        >
          {this.state.nameError}
        </p>

        <label>Expiration date</label>
        <input
          name="expirationDate"
          type="text"
          value={this.state.expirationDate}
          onChange={this.dateHandler}
          onFocus={this.expirationDateChange}
        />

        <div className="credit-card">
          <h1 className="credit-card-title">BANQUE SIMPLON</h1>
          <div className="credit-card-chip" />
          <div className="credit-card-content">
            <div className="credit-card-text">
              <h2 className="credit-card-number">{this.state.cnStars}</h2>
              <h2 className="credit-card-valid-thru">
                {this.state.DateDefault}
              </h2>
              <h2 className="credit-card-holder-name">
                {this.state.cardholder}
              </h2>
            </div>
            <div className="credit-card-logo">
              <img src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/logo-cb-1.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
