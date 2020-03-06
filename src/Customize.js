import Features from './Features';
import React from 'react'

function Customize(props) {
  return (<form className="main__form">
    <h2>Customize your laptop</h2>
    <Features
      updateFeature={props.updateFeature}
      features={props.features}
      USCurrencyFormat={props.USCurrencyFormat}
      selected={props.selected}
    />
  </form>)
}

export default Customize;