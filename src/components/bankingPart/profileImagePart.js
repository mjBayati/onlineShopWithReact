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
            <div className="col-12 w-100 p-0 m-0" id="profileImagePart">
                <div className="circle p-0 mx-auto my-0 justify-content-center">
                    <img className="profile-pic"
                    src={require('../../assets/5c1e7ecd.jpg')}
                    alt="profileImg"/>
                    <div className="mx-aauto p-0 m-0 justify-content-center" id="imageUploudIcon">
                        <div className="p-image">
                            <FontAwesomeIcon icon={aweSome.faCamera} className="upload-button"/>
                            <input className="file-upload" type="file" accept="image/*"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileImagePart;
