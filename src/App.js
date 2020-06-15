import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Work from './Work';
import Contact from './Contact';
import pageData from './page-data';

function App() {
  return (
    <>
      <Header {...pageData.header} />
      <div id="main">
        <Intro {...pageData.intro} />
        <Work {...pageData.work} />
        <Contact {...pageData.contact} />
      </div>
      <Footer {...pageData.footer} />
    </>
  );
}

export default App;
