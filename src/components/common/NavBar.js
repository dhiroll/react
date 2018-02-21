import React, {
  Component
} from 'react';

import NavBarItem from "./NavBarItem";
import AccountConnect from './AccountConnect';

class NavBar extends Component {
  render() {
    var items = [
      <NavBarItem title="HOME" />,
      <NavBarItem className="active" title="CINÉMA" />,
      <NavBarItem title="SÉRIES" />,
      <NavBarItem title="ÉMISSIONS" />,
      <NavBarItem title="NEWS" />,
      <AccountConnect />
    ];
    return <ul className="nav nav-tabs">{items}</ul>;
  }
}

export default NavBar;