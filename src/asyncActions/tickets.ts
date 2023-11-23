import { AnyAction, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk/src'

import { RootState } from '..'
import { getSearchIDAction, getTicketsAction } from '../store/ticketsReducer/ticketsReducer'

export const getSearchID = () => {
  return (dispatch: Dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((json) => {
        dispatch(getSearchIDAction(json))
      })
      .catch(() => dispatch(getSearchID()))
  }
}

export const getTickets = (id: string): ThunkAction<void, RootState, void, AnyAction> => {
  return (dispatch, getState) => {
    const state = getState()
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getTicketsAction(json))
        if (json.stop === false && state.tickets.searchId) {
          dispatch(getTickets(state.tickets.searchId))
        }
      })
      .catch(() => {
        if (state.tickets.searchId) {
          dispatch(getTickets(state.tickets.searchId))
        }
      })
  }
}
