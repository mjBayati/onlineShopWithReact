import React, { Component } from 'react';
import EditFinancialInfoPart from './editFinancialInfoPart';
import CreditCartView from './creditCardView';

let data = {
    name: 'علی محمدی',
    creditNumber: '5859831071068687',
    shabaNumber: '124555677888',
    bankName: 'مسکن'
};

let banksName = ['مسکن', 'صادرات', 'ایران زمین'];

class FinancialInfoPart extends Component {

    constructor(){
        super();
        
        this.state = {
            data: data, 
            banksName: banksName
        };
        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges(data){
        this.setState({
            data: data
        });
    }

    render() {
        return (
        <div className="row p-0 m-0 d-flex justify-content-between" id="financialInfoPart">
            <EditFinancialInfoPart saveChanges={this.saveChanges}
             data={this.state.data} banksName={this.state.banksName}/>
            <CreditCartView data={this.state.data}/>
        </div>
        );
    }
    }

export default FinancialInfoPart;
