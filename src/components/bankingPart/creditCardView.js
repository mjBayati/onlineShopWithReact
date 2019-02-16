import React, { Component } from 'react';

class EditCardView extends Component {  
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
        this.showNumber = this.showNumber.bind(this);
    }
    


    componentDidMount(){
        let data = this.props.data.creditNumber;
        let newData = "";
        if(data.length !== 16){
            alert('data is not in size of 16 bit');
        }
        else{
            let i = 0;
            for(i = 0; i < 16; i += 4){
                newData = newData.concat(data.slice(i, i+4));
                if(i !== 12){
                    newData.concat('  ');                    
                }
            }
        }
        console.log(newData);
        this.setState({
            data: newData
        });
    }

    showNumber(){
        let data = this.props.data.creditNumber.length;
        if(data.length !== 16){
            alert('data is not in size of 16 bit');
        }
        else{
            let i = 0;
            let newData = "";
            for(i = 0; i < 16; i += 4){
                newData = newData.concat(data.slice(i, i+4));
                if(i !== 12){
                    newData.concat('  ');                    
                }
            }
            return newData;
        }
    }

    render() {
        return (
        <div className="col-md-4" id="creditCardView">
            <div id="card">
                <div className="row" id="creditNumber">
                    <h6>{this.state.data}</h6> 
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
