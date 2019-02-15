import React from 'react';
import MainHeader from './mainHeader';
import MiddleHeader from './middleHeader';
import SubHeader from './subHeader';
import '../css/header.css';

export default class HeaderPart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="jumbotron p-0 m-0">
            <MainHeader/>
            <MiddleHeader/>
            <SubHeader/>
        </div>
    );
  }
}
