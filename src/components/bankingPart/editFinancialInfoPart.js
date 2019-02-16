import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as aweSome from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';


class EditFinancialInfoPart extends Component {  
    constructor(props){
        super(props);
        this.state = {
            data: {},
            banksName: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.setState({
            data: this.props.data,
            banksName: this.props.banksName
        });
    }

    handleClick(){
        let data = {
            name: this.state.data.name,
            creditNumber: $('#card').val(),
            shabaNumber: $('#shaba').val(),
            bankName: $('#bankName').children('option:selected').val()
        };
        // console.log(data);
        this.props.saveChanges(data);
    }

    render() {
        return (
        <div className="col-md-5" id="editFinancialInfoPart">
            <div className="row" id="header">
                <h4>ویرایش اطلاعات مالی</h4>
            </div>
            <div className="row" id="shabaAndBankName">
                <div class="form-group col-8 p-1 m-0">
                    <label for="shaba">
                    <FontAwesomeIcon icon={aweSome.faHashtag} /> شماره شبا  
                    </label>
                    <input type="text" className="form-control" id="shaba" placeholder={this.state.data.shabaNumber}/>
                </div>
                <div class="form-group col-4 p-1 m-0">
                    <label for="bankName">
                        <FontAwesomeIcon icon={aweSome.faUniversity}/> نام بانک        
                    </label>
                    <select id="bankName" class="form-control">
                        <option selected>{this.state.data.bankName}</option>
                        {this.state.banksName.filter(bankName => {
                            return bankName !== this.state.data.bankName
                        }).map(bankName => {
                            return(
                                <option>{bankName}</option>
                            );
                        })
                    }
                    </select>
                </div>
            </div>
            <div className="row" id="cardNumber">
                <div class="form-group col-8 p-1">
                    <label for="card">
                    <FontAwesomeIcon icon={aweSome.faCreditCard}/> شماره کارت 
                    </label>
                    <input type="text" className="form-control" id="card" placeholder={this.state.data.creditNumber}/>
                </div>
            </div>
            <div className="row" id="saveChangesButton">
                <Button onClick={this.handleClick}>ذخیره تغییرات</Button>
            </div>
        </div>
        );
    }
    }

export default EditFinancialInfoPart;
