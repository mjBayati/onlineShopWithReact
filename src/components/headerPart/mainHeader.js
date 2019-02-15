import React from 'react';
import MainHeaderNav from './mainHeaderNav';
import MainHeaderProfile from './mainHeaderProfile'

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div className="p-0 m-0 w-100  bg-dark">
          <div className="row w-100 p-0 m-0 d-flex justify-content-between align-items-center" id="mainHeader"> 
              <div className="col-md-6" id="mainHeaderNav">
                  <MainHeaderNav isOpen={this.state.isOpen} />
              </div>
              <div className="col-md-3">
                  <MainHeaderProfile className="col-md-4" data={this.state.data}/>
              </div>
          </div>
        </div>
    );
  }
}
