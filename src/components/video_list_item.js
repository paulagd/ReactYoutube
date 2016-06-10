import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{    // es com declarar dos propietats i asignarlis de fora

//  const video= props.video; // en comptes d'aquesta linia, podem canviar props per {video}
//  console.log(video);
const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick = { () => onVideoSelect(video)} className="list-group-item">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
