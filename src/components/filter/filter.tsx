import React from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../..'

import classes from './filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useAppSelector((state) => state.filter)

  const onChecked = (id: string, checked: boolean): void => {
    dispatch({ type: 'CHANGE_CHECKBOX', payload: [id, checked] })
  }

  return (
    <div className={classes.filter}>
      <div className={classes['filter__title']}>Количество пересадок</div>
      <ul className={classes['filter__list']}>
        {filter.map(({ name, id, checked }) => (
          <li key={id} className={classes['filter__item']}>
            <input
              type="checkbox"
              id={id}
              className={classes['filter__input']}
              onChange={() => onChecked(id, checked)}
              checked={checked}
            />
            <label htmlFor={id} className={classes['filter__label']}>
              {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
