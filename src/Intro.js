import React from 'react';

export default function({ title, copy, button = {} }) {
  return (
    <section id="one">
      <header className="major">
        <h2 dangerouslySetInnerHTML={title}></h2>
      </header>
      <p>{copy}</p>
      <ul className="actions">
        <li><a href={button.href} className="button">{button.text}</a></li>
      </ul>
    </section>
  );
}
