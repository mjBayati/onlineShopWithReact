import React, { Component } from 'react';

class EditCardView extends Component {  
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    
    componentDidMount(){
        this.setState({
            data: this.props.data
        });
    }

    render() {
        return (
        <div className="col-md-4" id="creditCardView">
            <div id="card">
                <div className="row" id="creditNumber">
                    <h6>{this.props.data.creditNumber}</h6> 
                </div>
                <div className="row d-flex justify-content-between" id="creditContent">
                    <h6>{this.props.data.name}</h6>
                    <h6>بانک {this.props.data.bankName}</h6>
                </div>
            </div>
        </div>
        );
    }
}

export default EditCardView;
