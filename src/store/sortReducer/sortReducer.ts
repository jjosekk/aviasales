import { SortReducerActionType, SortReducerStateType } from './types'

const initialState: SortReducerStateType = 'optimal'

export const sortReducer = (state: SortReducerStateType = initialState, action: SortReducerActionType) => {
  switch (action.type) {
    case 'CLICK':
      return (state = action.payload)
    default:
      return state
  }
}
