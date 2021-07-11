import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/alex' className='ui header'>Alex</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint atque cumque molestias. Labore hic, doloremque dolorem suscipit aut explicabo nam molestiae quae nemo laborum unde. Voluptate rem pariatur possimus.</p>
      </div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/willma' className='ui header'>Willma</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint atque cumque molestias. Labore hic, doloremque dolorem suscipit aut explicabo nam molestiae quae nemo laborum unde. Voluptate rem pariatur possimus.</p>
      </div>
    </div>
  );
}

export default Contact;