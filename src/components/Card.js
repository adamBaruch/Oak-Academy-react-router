import React from 'react';
import { connect } from "react-redux";
import { deleteDard, fetchUsers } from "../actions/cardActions";

class Card extends React.Component {

  // state = { user: '' }

  componentDidMount() {
    this.props.fetchUsers();
  }
  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    this.props.history.push('/contact')
  }

  render() {
    // console.log(this.props.users);
    // const { title, body } = this.props.card;
    const { users } = this.props;
    return (
      users.map(({name, email,id}) => {
        return (
          <div
            className='ui raised very padded text container segment'
            style={{ marginTop: '80px' }}
            key={id}
          >
            <h3 className='ui header'>{name}</h3>
            <p>{email}</p>
            <button className='ui primary right floated button' onClick={this.onButtonClick}>
              Delete
            </button>
          </div>
        )
      })
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;
  return {
    card: state.cards.find(card => {
      return card.title === title
    }),
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: (id) => { dispatch(deleteDard(id)) },
    fetchUsers: () => { dispatch(fetchUsers()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);