export interface ICheckbox {
  name: string
  id: string
  checked: boolean
}

export type FilterReducerStateType = ICheckbox[]

export interface IFilterReducerChangeCheckboxAction {
  type: 'CHANGE_CHECKBOX'
  payload: [string, boolean]
}

export type FilterReducerActionType = IFilterReducerChangeCheckboxAction
