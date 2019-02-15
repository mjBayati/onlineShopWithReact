import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as aweSome from "@fortawesome/free-solid-svg-icons";

class EditFinancialInfoPart extends Component {  
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
                    <input type="text" className="form-control" id="shaba" placeholder="IR"/>
                </div>
                <div class="form-group col-4 p-1 m-0">
                    <label for="bankName">
                        <FontAwesomeIcon icon={aweSome.faUniversity}/> نام بانک        
                    </label>
                    <select id="bankName" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div className="row" id="cardNumber">
                <div class="form-group col-8 p-1">
                    <label for="card">
                    <FontAwesomeIcon icon={aweSome.faCreditCard}/> شماره کارت 
                    </label>
                    <input type="text" className="form-control" id="card" placeholder="1111 1111 1111 1111"/>
                </div>
            </div>
            <div className="row" id="saveChangesButton">
                <Button>ذخیره تغییرات</Button>
            </div>
        </div>
        );
    }
    }

export default EditFinancialInfoPart;
