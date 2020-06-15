import React from 'react';

export default function({ image = {}, avatarHref, copy }) {
  return (<header id="header">
    <div className="inner">
      <a href={avatarHref} className="image avatar"><img src={image.src} alt={image.alt} /></a>
      <h1 dangerouslySetInnerHTML={copy}></h1>
    </div>
  </header>);
}
