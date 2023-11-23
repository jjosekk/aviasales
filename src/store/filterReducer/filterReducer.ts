import { FilterReducerActionType, FilterReducerStateType, ICheckbox } from './types'

const defaultState: FilterReducerStateType = [
  { name: 'Все', id: 'all', checked: true },
  { name: 'Без пересадок', id: 'without', checked: true },
  { name: '1 пересадка', id: 'one', checked: true },
  { name: '2 пересадки', id: 'two', checked: true },
  { name: '3 пересадки', id: 'three', checked: true },
]

export const filterReducer = (
  state: FilterReducerStateType = defaultState,
  action: FilterReducerActionType
): FilterReducerStateType => {
  switch (action.type) {
    case 'CHANGE_CHECKBOX': {
      const [id, checked] = action.payload
      if (id === 'all' && checked) {
        return state.map((el) => ({ ...el, checked: false }))
      }
      if (id === 'all' && !checked) {
        return state.map((el) => ({ ...el, checked: true }))
      }
      let newArr: ICheckbox[]
      const checkbox = state.find((el) => el.id === id) as ICheckbox
      const idx = state.indexOf(checkbox as ICheckbox)
      const newCheckBox: ICheckbox = {
        ...checkbox,
        checked: !checkbox?.checked,
      }
      newArr = [...state.slice(0, idx), newCheckBox, ...state.slice(idx + 1)]
      const numberOfActivated = newArr.slice(1).filter((el) => el.checked).length
      if (numberOfActivated === 4) {
        newArr[0].checked = true
      }
      if (numberOfActivated < 4) {
        newArr[0].checked = false
      }
      return newArr
    }

    default: {
      return state
    }
  }
}
