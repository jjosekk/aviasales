export type SortReducerStateType = 'optimal' | 'cheap' | 'fast'

export interface ISortReducerClickAction {
  type: 'CLICK'
  payload: SortReducerStateType
}

export type SortReducerActionType = ISortReducerClickAction
