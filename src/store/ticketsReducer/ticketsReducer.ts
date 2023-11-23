import { ITicket, ITicketReducerState, TicketReducerActions, TicketsReducerActionType } from './types'

const initialState: ITicketReducerState = { searchId: '', tickets: [], stop: false, visibleTickets: 3 }

export const ticketsReducer = (
  state: ITicketReducerState = initialState,
  action: TicketsReducerActionType
): ITicketReducerState => {
  switch (action.type) {
    case TicketReducerActions.GET_SEARCH_ID: {
      const { searchId } = action.payload
      return { ...state, searchId: searchId }
    }

    case TicketReducerActions.GET_TICKETS: {
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop }
    }

    case TicketReducerActions.SHOW_MORE_TICKETS: {
      return { ...state, visibleTickets: state.visibleTickets + 5 }
    }

    default: {
      return state
    }
  }
}

export const getSearchIDAction = (payload: { searchId: string }) => ({
  type: TicketReducerActions.GET_SEARCH_ID,
  payload,
})

export const getTicketsAction = (payload: { tickets: ITicket[]; stop: boolean }) => ({
  type: TicketReducerActions.GET_TICKETS,
  payload,
})
