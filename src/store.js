import { configureStore } from '@reduxjs/toolkit'
import  fetchAPI from './features/fetch-data/fetch-api-slice'

const store = configureStore({
  reducer: {
    fetchAPI: fetchAPI
  }
})

export default store