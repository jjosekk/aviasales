import React from 'react'
import { format } from 'date-fns'

import classes from './ticket.module.scss'

const Ticket = (props: any) => {
  const { item } = props
  const { price, carrier, segments } = item

  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <div className={classes['ticket__price']}>{`${price.toLocaleString()} Р`}</div>
        <div className={classes['ticket__company-logo']}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
        </div>
      </div>
      <div className={classes['ticket__body']}>
        {segments.map((el: any) => {
          const { origin, destination, date, duration, stops } = el
          const departureTime = format(new Date(date), 'HH:mm')
          const arrivalTime = format(new Date(new Date(date).getTime() + duration * 60 * 1000), 'HH:mm')

          return (
            <div key={el.date} className={classes['ticket__plane-ticket']}>
              <div className={classes['ticket__info']}>
                <p className={classes['ticket__title']}>
                  {origin} – {destination}
                </p>
                <p>
                  {departureTime} – {arrivalTime}
                </p>
              </div>
              <div className={classes['ticket__info']}>
                <p className={classes['ticket__title']}>В пути</p>
                <p>{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
              </div>
              <div className={classes['ticket__info']}>
                <p className={classes['ticket__title']}>{`${
                  stops.length === 0
                    ? 'Без пересадок'
                    : stops.length % 10 === 1
                      ? `${stops.length} пересадка`
                      : stops.length % 10 >= 2 && stops.length % 10 <= 4
                        ? `${stops.length} пересадки`
                        : `${stops.length} пересадок`
                }`}</p>
                <p>{stops.join(', ')}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ticket
