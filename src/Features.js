import React from 'react'
import Options from './Options.js'

function Features(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options
          features={props.features}
          updateFeature={props.updateFeature}
          feature={feature}
          USCurrencyFormat={props.USCurrencyFormat}
          selected={props.selected}
        />
      </fieldset>
    );
  });
  return features
}

export default Features