import React, {
  Component
} from 'react';



class Title extends Component {
  render() {
    return <h2 className="text-center">{this.props.title}</h2>
  }
}

export default Title;