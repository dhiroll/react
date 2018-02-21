import React, {
  Component
} from 'react';
import data from "../../data/Data.json";
import Button from './Button';

class Details extends Component {

  state = {
    detailsDisplayed: false
  };
  renderDisplays() {
    if (this.state.detailsDisplayed === true) {
      var details = [];
      for (var i = 0; i < data.infos.length; i++) {
        details.push(<li>{data.infos[i].label} : <span className="color-blue">{data.infos[i].content.text}</span> </li>)
      }
      return <ul className="detailsList">{details}</ul>;
    }
    return null;
  }
  handleClick = () => {
    if (this.state.detailsDisplayed === false) {
      this.setState({
        detailsDisplayed: true
      });
    } else {
      this.setState({
        detailsDisplayed: false
      });
    }
  };
  render() {
    console.log("Rendering");
    return (
      <div>
        {this.renderDisplays()}
        <button className="btn btn-outline-secondary" onClick={this.handleClick}>Voir les infos techniques</button>
      </div>
    );
  }
}
export default Details;