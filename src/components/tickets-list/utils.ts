import { ICheckbox } from '../../store/filterReducer/types'
import { ITicket } from '../../store/ticketsReducer/types'

export const getFilteredAndSortedTickets = (ticketList: ITicket[], filter: ICheckbox[], sort: string): ITicket[] => {
  let ticketsOfFilteredList: ITicket[] = []

  if (filter.find((el) => el.id === 'without')?.checked === true) {
    const withoutTransfer = ticketList.filter((ticket: ITicket) => {
      if (ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) return ticket
    })
    ticketsOfFilteredList = [...ticketsOfFilteredList, ...withoutTransfer]
  }

  if (filter.find((el) => el.id === 'one')?.checked === true) {
    const oneTransfer = ticketList.filter((ticket: ITicket) => {
      if (ticket.segments[0].stops.length <= 1 && ticket.segments[1].stops.length <= 1) return ticket
    })
    ticketsOfFilteredList = [...ticketsOfFilteredList, ...oneTransfer]
  }

  if (filter.find((el) => el.id === 'two')?.checked === true) {
    const twoTransfer = ticketList.filter((ticket: ITicket) => {
      if (ticket.segments[0].stops.length <= 2 && ticket.segments[1].stops.length <= 2) return ticket
    })
    ticketsOfFilteredList = [...ticketsOfFilteredList, ...twoTransfer]
  }

  if (filter.find((el) => el.id === 'three')?.checked === true) {
    const threeTransfer = ticketList.filter((ticket: ITicket) => {
      if (ticket.segments[0].stops.length <= 3 && ticket.segments[1].stops.length <= 3) return ticket
    })
    ticketsOfFilteredList = [...ticketsOfFilteredList, ...threeTransfer]
  }

  const tickets = Array.from(new Set(ticketsOfFilteredList))

  if (sort === 'cheap') {
    tickets.sort((a, b) => a.price - b.price)
  }

  if (sort === 'fast') {
    tickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
  }

  return tickets
}
