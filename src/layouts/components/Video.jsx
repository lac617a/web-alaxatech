import React from 'react';

export default function Video() {
  return (
    <div className="l-video vh snap-start" id="video" data-snap-current="false">
      <figure className="l-video-view">
        <video src={require('../../assets/video/video_clients_alaxatech.mp4')} loop autoPlay muted></video>
      </figure>
      <div className="l-video-into">
        <h2 className="l-video-title l-title">Creando mejores experiencias para sus usuarios</h2>
        <p>Ayudamos, validamos y escalamos de acuerdo al objetivo de tu negocio.</p>
      </div>
    </div>
  );
}
