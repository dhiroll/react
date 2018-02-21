import React, {
  Component
} from 'react';


class Modal extends React.Component {
  render() {
    console.log("Modal")
    return (
      <div className="modalContainer">
        <form>
          <div className="form-group">
            <h3>Se connecter<span className="exitModal right">X</span></h3>

            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn yellow">Continuer</button>
        </form>
      </div >
    );
  }
}

export default Modal;





