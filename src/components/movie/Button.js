import React, {
  Component
} from 'react';

import data from "../../data/Data.json";

class Button extends Component {
  render() {
    var buttonItems = [];

    for (var i = 0; i < data.actions.length; i++) {
      buttonItems.push(<li className="btn d-inline">
        <a href={data.actions[i].link} className={data.actions[i].color} role="button" aria-disabled="true">{data.actions[i].text}</a>
      </li>)
    }
    return <ul className="buttonContainer">{buttonItems}</ul>;
  }
}

export default Button;