import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as aweSome from "@fortawesome/free-solid-svg-icons";
export default class MiddleHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="m-0 p-0 row d-flex w-100 justify-content-between align-items-center" id="middleHeader">
                <div className="col-md-3 d-flex align-items-center" id="appLogoPart">
                    <div id="appLogo">
                        <img src={require('../../assets/appLogo.PNG')} alt="appLogo"/>                
                    </div>    
                    <div id="appName">
                        <img src={require('../../assets/appName.PNG')} alt="appName"/>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center" id="searchAndShoppingIcons">
                    <div className="mx-1 p-0 align-items-center justufy-content-center" id="shoppingButton">
                        <FontAwesomeIcon icon={aweSome.faShoppingCart} />
                    </div>
                    <div className="mx-1 p-0 align-items-center justufy-content-center" id="searchButton">
                        <FontAwesomeIcon icon={aweSome.faSearch} />
                    </div>
                </div>
            </div>
        );
    }
}