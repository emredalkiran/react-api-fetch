import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../config/config'

export const contacts = createAsyncThunk('fetchAPI/contacts', async (parameters) => {

  try {
      const response = await axios.get('/api/contacts.json', {
        params: parameters
      })
      return response.data
  } catch (err){
      return {
        success:false,
        error: "Oops, something went wrong!"
      }
    }
})

const fetchAPI = createSlice({
  name: 'fetchAPI',
  initialState: {
    loading: false,
    contactIds: [],
    contactContent: {}
  },
  reducers: {
    addContent(sliceState, action) {
      sliceState.content.push(action.payload)
    },
    deleteContent(sliceState, action) {
      sliceState.contentIds = []
      sliceState.contactContent = {}
    }
  },
  extraReducers: {
    [contacts.pending]: (sliceState, action) => {
      sliceState.loading = true
    },
    [contacts.fulfilled]: (sliceState, action) => {
      sliceState.loading = false
      sliceState.contactIds = [...sliceState.contactIds, ...action.payload.contacts_ids]
      sliceState.contactContent = { ...sliceState.contactContent, ...action.payload.contacts }
    },
    [contacts.rejected]: (sliceState, action)=> {
      console.log(action)
    }

  }
})

export const selectLoadingStatus = state => state.fetchAPI.loading
export const selectContactIds = state => state.fetchAPI.contactIds
export const selectContactContent = state => state.fetchAPI.contactContent

export default fetchAPI.reducer