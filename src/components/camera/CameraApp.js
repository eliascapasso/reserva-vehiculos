import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function () {
    const camera = useRef(null);
    const [image, setImage] = useState(null);

    return (
        <div>
            <Camera ref={camera} />
            <button onClick={() => setImage(camera.current.takePhoto())}>Tomar foto</button>
            <img src={image} alt='Tomar foto' />
        </div>
    );
}