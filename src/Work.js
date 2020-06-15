import React from 'react';

const Item = ({ title, description, image = {} }) => (
  <article className="col-6 col-12-xsmall work-item">
    <a href={image.src} className="image fit thumb"><img src={image.thumb} alt={image.alt} /></a>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

export default function({ title, button = {}, items = [] }) {
  const uuid = +(new Date());
  return (
    <section id="two">
      <h2>{title}</h2>
      <div className="row">
        {items.map((item, i) => <Item key={`${uuid}_${i}`} {...item} />)}
      </div>
      <ul className="actions">
        <li><a href={button.href} className="button">{button.text}</a></li>
      </ul>
    </section>
  );
}
