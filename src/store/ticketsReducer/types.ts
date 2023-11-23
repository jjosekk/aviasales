export interface ITicketReducerState {
  searchId: string
  tickets: ITicket[]
  stop: boolean
  visibleTickets: number
}

export enum TicketReducerActions {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  GET_TICKETS = 'GET_TICKETS',
  SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS',
}

export interface ITicket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ]
}

export interface ITicketReducerGetSearchIdAction {
  type: TicketReducerActions.GET_SEARCH_ID
  payload: { searchId: string }
}

export interface ITicketReducerGetTicketsAction {
  type: TicketReducerActions.GET_TICKETS
  payload: { tickets: ITicket[]; stop: boolean }
}

export interface ITicketReducerShowMoreTicketsAction {
  type: TicketReducerActions.SHOW_MORE_TICKETS
  payload: void
}

export type TicketsReducerActionType =
  | ITicketReducerGetSearchIdAction
  | ITicketReducerGetTicketsAction
  | ITicketReducerShowMoreTicketsAction
