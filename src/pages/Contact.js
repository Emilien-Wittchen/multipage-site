import React from 'react';
import {useLocation} from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, contact us here!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta
        labore non alias nulla assumenda, possimus tenetur ad quo voluptates
        illo vero fugiat numquam consectetur perspiciatis, consequatur libero.
        Perspiciatis, ducimus.
      </p>
    </div>
  );
}
