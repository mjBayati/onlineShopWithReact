import React, { Component } from 'react';
import ProfileImagePart from './profileImagePart'; 
import ProfileOptions from './profileOptions';

class ProfilePart extends Component {
    render() {
        return (
            <div className="row p-0 m-0" id="profileImagePart">
                <ProfileImagePart />
                <ProfileOptions/>
            </div>
        );
    }
    }

export default ProfilePart;
