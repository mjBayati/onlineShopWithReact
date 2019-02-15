import React, { Component } from 'react';
import EditFinancialInfoPart from './editFinancialInfoPart';
import CreditCartView from './creditCardView';

class FinancialInfoPart extends Component {
    
  
    render() {
        return (
        <div className="row p-0 m-0 d-flex justify-content-between" id="financialInfoPart">
            <EditFinancialInfoPart/>
            <CreditCartView/>
        </div>
        );
    }
    }

export default FinancialInfoPart;
