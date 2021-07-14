import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';

const Contact = ({ cards }) => {
  return (
    <div>
      {/* <Modal/> */}
      {
        cards.map(({id, title , body}) => {
          return (
            <div
            className='ui raised very padded text container segment'
            style={{ marginTop: '80px' }}
            key={id}
          >
            <Link to={`/${title}`} className='ui header'>{title}</Link>
            <p>{body}</p>
          </div>
          )
        })
      }
      {/* <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/willma' className='ui header'>Willma</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint atque cumque molestias. Labore hic, doloremque dolorem suscipit aut explicabo nam molestiae quae nemo laborum unde. Voluptate rem pariatur possimus.</p>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Contact);