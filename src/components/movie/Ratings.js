import React, {
  Component
} from 'react';

import data from "../../data/Data.json";

class Ratings extends React.Component {


  render() {
    console.log(data.rating)
    return (
      <div className="rating">
        <div className="row">
          <div className="col">
            <ul className="d-inline">
              <li>Presse</li>
              <li>Note : {data.rating[0].note}</li>
              <li>{data.rating[0].details}</li>
            </ul>
          </div>
          <div className="col">
            <ul className="d-inline">
              <li>Spectateurs</li>
              <li>Note : {data.rating[1].note}</li>
              <li>{data.rating[1].details}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Ratings;