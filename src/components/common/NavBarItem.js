import React, {
  Component
} from 'react';


class NavBarItem extends Component {
  render() {
    return (

      <li className="nav-item"><a className="nav-link" href="#">{this.props.title}</a></li>

    );
  }
}

export default NavBarItem;