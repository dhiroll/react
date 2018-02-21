import React, {
  Component
} from 'react';
import data from "../../data/Data.json";


class Synopsis extends Component {
  render() {
    return <p>{data.synopsis}</p>
  }
}

export default Synopsis;