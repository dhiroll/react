import React, {
  Component
} from 'react';

import Modal from './Modal';

class AccountConnect extends Component {
  state = {
    modalConnection: false
  };
  renderModalConnection() {
    if (this.state.modalConnection === true) {
      console.log("modal 1 entered");
      return (<Modal />);
    };
    return null;
  }
  handleClick = () => {
    if (this.state.modalConnection === false) {
      this.setState({
        modalConnection: true
      });
    } else {
      this.setState({
        modalConnection: false
      });
    }
  };

  render() {
    console.log("rendering to modal")
    return (
      <ul className="ml-auto">
        {this.renderModalConnection()}
        <li onClick={this.handleClick} className="nav-item ml-auto"><a className="nav-link" href="#" >Mon Allociné</a></li >
      </ul>
    );
  }
}

export default AccountConnect;