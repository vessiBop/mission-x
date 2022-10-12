
import NotificationOne from './NotificationOne';
import NotificationTwo from './NotificationTwo';

import './Fonts.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
 

export default function ProjectSubs() {
    return (
        <>
        
            <div className="upload-parent-container">
                
                <div className="project-subs-container">
                    <NotificationOne />
                    <NotificationTwo />
                    <div className="pro-sub-text1">Project Submissions</div>
                    <div className="pro-sub-text2"><FontAwesomeIcon icon={["fas", "coffee"]} />Download Files</div>
                    <div className="pro-sub-text3">Mark As Complete Project<i class="fa fa-download" aria-hidden="true"></i></div>
                </div>
            </div> 
        </>
    )
}

