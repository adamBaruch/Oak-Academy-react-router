import axios from "axios"

export const deleteDard = (id) => {
  return {
    type: 'DELETE_CRAD  ',
    id
  }
}

export const fetchUsers = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) =>  {
      dispatch({ type: 'FETCH_USERS', payload: data })
    })
  }
}
