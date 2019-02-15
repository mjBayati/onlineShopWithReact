import React from 'react';

export default class FooterNewsPart extends React.Component {
    render() {
        return(
            <div className="row" id="socialsAndCredits">
                <div className="col-md-6 m-0" id="credits">
                    <div className="row">
                        <h4>شبکه های اجتماعی</h4>
                    </div>
                    <div className="row d-flex" id="imgSet">
                        <img src={require('../../assets/google.svg')} alt="google"/>
                        <img src={require('../../assets/facebook.svg')} alt="facebook"/>
                        <img src={require('../../assets/instagram.svg')} alt="instagram"/>
                        <img src={require('../../assets/twitter.svg')} alt="twitter"/>
                    </div>
                </div>   
                <div className="col-md-6 m-0" id="socials">
                    <div className="row">
                        <h4>نماد اعتماد</h4>
                    </div>
                    <div className="row d-flex" id="imgSet">    
                        <img src={require('../../assets/5c1e7ecd.jpg')}
                            srcSet={`${require('../../assets/5c1e7ecd@2x.jpg')} 2x,
                            ${require('../../assets/5c1e7ecd@3x.jpg')} 3x`
                            }
                            alt="senfi"
                        />
                        <img src={require('../../assets/enamad-wordpress.jpg')}
                            srcSet={`${require('../../assets/enamad-wordpress@2x.jpg')} 2x,
                            ${require('../../assets/enamad-wordpress@3x.jpg')} 3x`
                            }
                            alt="enemad"
                        />                       
                    </div>
                </div>
            </div>
        );
    }

}