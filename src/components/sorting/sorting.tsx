import React from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../..'

import classes from './sorting.module.scss'

const Sorting = () => {
  const dispatch = useDispatch()
  const sort = useAppSelector((state) => state.sort)

  const handleClick = (str: string): void => {
    dispatch({ type: 'CLICK', payload: str })
  }

  return (
    <div className={classes.sorting}>
      <button
        className={`${classes['sorting__button']} ${sort === 'cheap' && classes['sorting__button-active']}`}
        onClick={() => handleClick('cheap')}
      >
        Самый дешевый
      </button>
      <button
        className={`${classes['sorting__button']} ${sort === 'fast' && classes['sorting__button-active']}`}
        onClick={() => handleClick('fast')}
      >
        Самый быстрый
      </button>
      <button
        className={`${classes['sorting__button']} ${sort === 'optimal' && classes['sorting__button-active']}`}
        onClick={() => handleClick('optimal')}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Sorting
