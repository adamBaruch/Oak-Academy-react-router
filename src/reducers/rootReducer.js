
const initialState = {
  cards: [
    { id: 1, title: 'alex', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam tempore, ex molestias nam nesciunt maxime similique veniam facilis voluptatum itaque voluptatem quisquam, culpa fuga. Ut consequatur quasi quaerat quas?' },
    { id: 2, title: 'adam', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam tempore, ex molestias nam nesciunt maxime similique veniam facilis voluptatum itaque voluptatem quisquam, culpa fuga. Ut consequatur quasi quaerat quas?' },
    { id: 3, title: 'shosh', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam tempore, ex molestias nam nesciunt maxime similique veniam facilis voluptatum itaque voluptatem quisquam, culpa fuga. Ut consequatur quasi quaerat quas?' }
  ],
  users: []
}
const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id;
      })
      return {
        ...state,
        cards: newCard
      }
      case 'FETCH_USERS':
        return{
          ...state,
          users: action.payload
        }
    default:
      return state;
  }
}

export default rootReducer;