import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { filterReducer } from './filterReducer/filterReducer'
import { sortReducer } from './sortReducer/sortReducer'
import { ticketsReducer } from './ticketsReducer/ticketsReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
