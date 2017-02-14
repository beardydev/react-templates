import React from 'react';
import {render} from 'react-dom';

// Template
import Template from './Template';

// Child components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

render(
  <Template
    header={<Header title="Header"/>}
    content={<Content title="Content"/>}
    footer={<Footer title="Footer"/>}
  />,
  document.getElementById('app')
);
