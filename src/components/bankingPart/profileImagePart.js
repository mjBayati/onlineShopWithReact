import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as aweSome from "@fortawesome/free-solid-svg-icons";
import '../css/profileImageUploud.css';
import $ from 'jquery';

class ProfileImagePart extends React.Component {
    constructor(){
        super();
        // this.imgUploud = this.imgUploud.bind(this);

        $(document).ready(function() {

            var readURL = function(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('.profile-pic').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            
        
            $(".file-upload").on('change', function(){
                readURL(this);
            });
            
            $(".upload-button").on('click', function() {
               $(".file-upload").click();
            });
        });
    }
    // imgUploud(){
    // }
    render() {
        return (
            <div className="col-12" id="profileImagePart">
                <div className="row">
                    <div className="small-12 medium-2 large-2 columns justify-content-center">
                        <div className="circle">
                            <img className="profile-pic"
                            src={require('../../assets/5c1e7ecd.jpg')}
                            alt="profileImg"/>
                            <FontAwesomeIcon icon={aweSome.faUser}/>
                            <div className="p-image">
                                <FontAwesomeIcon icon={aweSome.faCamera} className="upload-button"/>
                                <input className="file-upload" type="file" accept="image/*"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileImagePart;
