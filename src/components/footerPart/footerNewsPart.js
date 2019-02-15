import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default class FooterNewsPart extends React.Component {
    render() {
        return (
            <div id="newsPart">
                <div className="row" id="newsPartHeader">
                    <h4>خبرنامه</h4>
                </div>
                <div className="row" id="newsPartContent">
                    <h6>برای اطلاع از اخرین اخبار و تخفیف های ویژه عضو خبرنامه ما شوید</h6>
                </div>
                <div className="row" id="newsPartInlineSignUp">
                    <InputGroup>
                        <Input placeholder="ایمیل خود را وارد کنید"/>
                        <InputGroupAddon addonType="prepend">
                            <Button color="success">عضویت</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>  
            </div>  
        );
    }
}
