import React, { Component } from 'react';

class BankingPart extends Component {
    
  
    render() {
        return (
        <div className="col-12 w-100 m-0 p-0" id="profileOptions">
            <ul className="list-group borderless m-0 p-0 w-100">
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">
                    سفارشات من
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">
                    لیست علاقه مندی ها
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">
                    پیگیری سفارشات
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">
                    اطلاعات مالی
                </a>
            </ul>
            <div className="p-1" id="exitFromProfile">
                <a href="#">خروج از حساب کاربری</a>
            </div>    
        </div>
        );
    }
    }

export default BankingPart;
