import { createRoot } from 'react-dom/client'
import type { TypedUseSelectorHook } from 'react-redux'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from './store/index'
import App from './components/app/app'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
