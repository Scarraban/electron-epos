import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <nav>
          <div className="nav-wrapper light-green">
            <div className="row">
              <div className="col s12">
                <a href="#" className="brand-logo">POSitron</a>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Header;
