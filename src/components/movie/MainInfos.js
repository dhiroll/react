import React, {
  Component
} from 'react';
import data from "../../data/Data.json";


class MainInfos extends Component {
  render() {
    var mainInfos = [];
    console.log(data.mainInfos[0].content[0].text)
    for (var j = 0; j < data.mainInfos.length; j++) {
      var infos = data.mainInfos[j];
      var classSpan = (infos.content[0].bold !== undefined) ? "color-blue text-bold" : "color-blue";
      mainInfos.push(<li>
        {infos.label} :{" "}
        <span className={classSpan}>{infos.content[0].text}</span>{" "}
        <span>{infos.content[1] !== undefined ? infos.content[1].text : ""}</span>
      </li>)
    }
    return <ul>{mainInfos}</ul>
  }
}
export default MainInfos;