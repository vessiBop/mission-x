import React, { useState } from "react";
import { PickerOverlay } from "filestack-react-18";
import UploadImg from './images/StudentDashboard/sendPhoto.png';


const FileStack = () => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  return (
    <div>
      
      <img className="upload-img2" src={UploadImg} alt="UploadImg" onClick={handleVisible} />
    
      <div>
        {isPickerOverlayVisible && (
          <PickerOverlay
            apikey="AywFoC6XbQTuh9TJrmNJkz"
            onSuccess={(result) => {
              setImageUrl(result.filesUploaded[0].url);
              setIsPickerOverlayVisible(false);
            }}
          />
        )}
      </div>
 {/* you need to store this url to your database */}
      <a href={imageUrl}> </a>
    </div>
  );
};

export default FileStack;
