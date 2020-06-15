import React from 'react';

const SocialLink = ({ icon, text, href }) => (
  <React.Fragment>
    <li><a href={href} className={`icon brands ${icon}`}><span className="label">{text}</span></a></li>{` `}
  </React.Fragment>
);

export default function({ socialLinks = [] }) {
  const uuid = +(new Date());

  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          {socialLinks.map((link, i) => <SocialLink key={`${uuid}_${i}`} {...link} />)}
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          <li>React conversion: <a href="http://shaneriley.com" target="_blank" rel="noopener noreferrer">Shane Riley</a></li>
        </ul>
      </div>
    </footer>
  );
}
