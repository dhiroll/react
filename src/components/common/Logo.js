import React, {
  Component
} from 'react';


class Logo extends Component {
  render() {
    return (

      <div className="logoContainer">
        <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
      </div>

    );
  }
}

export default Logo;