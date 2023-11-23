import React, { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'

import Sorting from '../sorting/sorting'
import Filter from '../filter/filter'
import TicketsList from '../tickets-list/tickets-list'
import { useAppDispatch, useAppSelector } from '../..'
import { getSearchID, getTickets } from '../../asyncActions/tickets'

import { ReactComponent as Logo } from './logo.svg'
import classes from './app.module.scss'

import type {} from 'redux-thunk/extend-redux'

const App = () => {
  const dispatch = useAppDispatch()
  const searchId = useAppSelector((state) => state.tickets.searchId)
  const loading = useAppSelector((state) => state.tickets.stop)

  useEffect(() => {
    dispatch(getSearchID())
  }, [])

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId))
    }
  }, [searchId])

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <Filter />
      <Sorting />
      {!loading && (
        <div className={classes.load}>
          Поиск билетов
          <LoadingOutlined
            style={{
              fontSize: 24,
              color: '#2196f3',
            }}
            spin
          />
        </div>
      )}
      <TicketsList />
    </div>
  )
}

export default App
