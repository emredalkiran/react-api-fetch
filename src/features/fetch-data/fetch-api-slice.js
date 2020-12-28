import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../config/config'

export const contacts = createAsyncThunk('fetchAPI/contacts', async (parameters) => {
      const response = await axios.get('/api/contacts.json', {
        params: parameters
      })
      return response.data
    })
    
const fetchAPI = createSlice({
  name: 'fetchAPI',
  initialState: {
    type: '',
    page: 1,
    loading: false,
    contactIds: [],
    contactContent: {},
    error: null
  },
  reducers: {
    deleteContent(sliceState, action) {
      sliceState.contactIds = []
      sliceState.contactContent = {}
      sliceState.page = 1
      sliceState.type = ''
      sliceState.error = null
    },
    incrementPage(sliceState) {
      sliceState.page += 1 
    },
    setModalType(sliceState, action) {
      sliceState.type = action.payload.modalType
      sliceState.contactIds = []
      sliceState.contactContent = {}
      sliceState.page = 1
    }
  },
  extraReducers: {
    [contacts.pending]: (sliceState, action) => {
      sliceState.loading = true
      sliceState.error = null
    },
    [contacts.fulfilled]: (sliceState, action) => {
      sliceState.loading = false
      sliceState.contactIds = [...sliceState.contactIds, ...Object.keys(action.payload.contacts)]
      sliceState.contactContent = { ...sliceState.contactContent, ...action.payload.contacts }

    },
    [contacts.rejected]: (sliceState, action)=> {
      sliceState.error = action.payload
    }
  }
})
export const selectPageNumber = state => state.fetchAPI.page
export const selectLoadingStatus = state => state.fetchAPI.loading
export const selectModalData = state =>  { 
  return { 
    contactIds: state.fetchAPI.contactIds,
    contactContent: state.fetchAPI.contactContent,
    modalType: state.fetchAPI.type
  }
}
export const selectError = state => state.fetchAPI.error
export const {
 deleteContent,
 incrementPage,
 setModalType
} = fetchAPI.actions

export default fetchAPI.reducer