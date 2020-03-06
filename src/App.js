import React, { Component } from 'react';
import Features from './Features';
import Summary from './Summary'
import Total from './Total'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      'Processor': {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      'Display': {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      } //state will be desplay for cart
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected); //creating a copy of state
    selected[feature] = newValue; //adding new value to state
    this.setState({
      selected //replacing state with copy
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
              updateFeature={this.updateFeature}
              features={this.props.features}
              USCurrencyFormat={USCurrencyFormat}
              selected={this.state.selected}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
              selected={this.state.selected}
              USCurrencyFormat={USCurrencyFormat}

            />
            {/* problem here */}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total selected={this.state.selected} />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
