import React from 'react';
import LinksTable from './linksTable';
import FooterNewsPart from './footerNewsPart';
import SocialsAndCreditsPart from './socialsAndCreditsPart';
import '../css/footer.css';

export default class FooterPart extends React.Component {
  render() {
    return (
      <div className="jumbotron py-0 m-0" id="footerPart">
        <div className="row w-100 p-0 m-0 d-flex justify-content-between" id="footerFirstRow">
            <div className="col-md-6 p-0 my-2" id="footerTableWrapper">
                <LinksTable/>
            </div>
            <div className="col-md-4 p-0 my-3" id="signUpInNewsPart">
                <FooterNewsPart/>
                <SocialsAndCreditsPart/>
            </div>
        </div>
      </div>
    );
  }
}