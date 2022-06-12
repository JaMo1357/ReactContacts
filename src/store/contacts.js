import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchContactsData } from '@/services/serviceHttp';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {},
  },
  reducers: {
    addUser: (state) => {
      console.log('addUser', state)
    },
    removeUser: (state, contactID) => {
      console.log('removeUser', state)
      const contactIndex = state.contacts.findIndex(contact => contact.id === contactID)
      state.contacts.splice(contactIndex)
    },
    updateUser: (state, action) => {
      console.log('updateUser', state, action)
      //state.userID = action.payload
    },
    appendContacts: (state, contacts) => {
      state.contacts = contacts
    }
  },
})

export const { addUser, removeUser, removupdateUsereUser, appendContacts } = contactsSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchContacts = createAsyncThunk('url', async (dispatch) => {
  await fetchContactsData.then((contacts) => {
    dispatch(appendContacts(contacts))
  })
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const contactsCount = (state) => state.contacts.length

export default contactsSlice.reducer
