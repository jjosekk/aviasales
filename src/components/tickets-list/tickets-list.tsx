import { LoadingOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

import Ticket from '../ticket/ticket'
import { useAppSelector } from '../..'
import { ITicket } from '../../store/ticketsReducer/types'

import classes from './tickets-list.module.scss'
import { getFilteredAndSortedTickets } from './utils'

const TicketsList = () => {
  const ticketList = useAppSelector((state) => state.tickets.tickets)
  const filter = useAppSelector((state) => state.filter)
  const sort = useAppSelector((state) => state.sort)
  const visibleTicketsCount = useAppSelector((state) => state.tickets.visibleTickets)

  const dispatch = useDispatch()

  const tickets = getFilteredAndSortedTickets(ticketList, filter, sort)

  const handleShowMore = (): void => {
    dispatch({ type: 'SHOW_MORE_TICKETS' })
  }

  if (ticketList.length === 0) {
    return (
      <div className={classes['load']}>
        <LoadingOutlined
          style={{
            fontSize: 48,
            color: '#2196f3',
          }}
        />
      </div>
    )
  }

  if (tickets.length === 0) {
    return <div className={classes['no-tickets']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  }

  return (
    <div className={classes['tickets']}>
      <ul className={classes['tickets__list']}>
        {tickets
          .map((item: ITicket) => <Ticket item={item} key={item.segments[0].date + item.segments[1].date} />)
          .slice(0, visibleTicketsCount)}
      </ul>
      <button className={classes['tickets__button']} onClick={() => handleShowMore()}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default TicketsList
