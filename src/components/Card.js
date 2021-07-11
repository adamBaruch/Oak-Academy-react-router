import React from 'react';

class Card extends React.Component {

  state = { user: '' }

  componentDidMount(){
    let user = this.props.match.params.user;
    this.setState({user});
  }

  render() {
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>{this.state.user}</h3>
      </div>
    )
  }
}

export default Card;