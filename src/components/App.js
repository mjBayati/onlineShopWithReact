import React, { Component } from 'react';
import HeaderPart from './headerPart/headerPart';
import FooterPart from './footerPart/footerPart';
import BankingPart from './bankingPart/bankingPart';
import CopyRightPart from './footerPart/copyRightPart';
// import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App w-100">
        <HeaderPart/>
        <BankingPart/>
        <FooterPart/>
        <div className="row w-100 p-0 m-0" id="CopyrightPart">
            <CopyRightPart/>
        </div>
      </div>
    );
  }
}

export default App;
