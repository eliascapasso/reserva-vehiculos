import { Button } from "devextreme-react";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import { Link } from "react-router-dom";
import "./camera.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div>
      <div>
        <Camera ref={camera} aspectRatio={16 / 9} />
      </div>
      <div className="camera-button">
        <Button
          width={"100%"}
          text="TOMAR FOTO"
          type="default"
          stylingMode="contained"
          onClick={() => setImage(camera.current.takePhoto())}
        />
        <Link to={`/reserve`}>CANCELAR</Link>
      </div>
      <div className="image-wrapper">
        <img src={image} alt="Captura" />
      </div>
    </div>
  );
}
