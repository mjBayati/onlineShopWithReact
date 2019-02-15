import React, { Component } from 'react';
import '../css/bankingPartStyle.css';
import ProfilePart from './profilePart';
import FinancialInfoPart from './financialInfoPart';

class BankingPart extends Component {
    
  
    render() {
        return (
        <div className="jumbotron w-100 m-0 p-5" id="bankingWrapper">
                <div className="row p-0 m-0" id="bankingPart">
                    <div className="col-md-2 p-0" id="profilePart">
                        <ProfilePart /> 
                    </div>
                    <div className="col-md-9 p-0" id="accountPart">
                        <FinancialInfoPart />
                    </div>
                </div>
        </div>
        );
    }
    }

export default BankingPart;
