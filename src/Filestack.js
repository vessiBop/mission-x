import React from "react";
import { PickerOverlay } from "filestack-react-18";



export default function FileStack() {
const FileStack = () => {
    const [isPickerOverlayVisible, SetIsPickerOverlavisible] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleVisible = () => {
        SetIsPickerOverlavisible(!isPickerOverlayVisible);
    };

    return (
        <div>
            <button onClick={handleVisible}>Picker Overlay</button>
            <div>
                {isPickerOverlayVisible && (
                    <PickerOverlay
                    apikey="pastehere"
                    onSuccess={(result) => setImageUrl(filesUploaded[0].url)}
                    />
                )}
            </div>
            {/*store this url */}
                    <a href="{}imageUrl">click and open image url</a>
        </div>
    );
                
}
}
        
    
