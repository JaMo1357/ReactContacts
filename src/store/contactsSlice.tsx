import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchContactsData } from '../services/serviceHttp'
import { ContactInterface } from '../../interfaces'

interface ContactsState {
  contacts: ContactInterface[]
  isLoading: boolean
  error: string | undefined
}

export const initialState = {
  isLoading: false,
  contacts: [],
  error: '',
} as ContactsState

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<ContactInterface>) => {
      const highestID = state.contacts?.map((contact: ContactInterface) => contact?.id)?.pop() || 0
      payload.id = highestID + 1

      state.contacts.push(payload)
    },
    removeContact: (state, { payload }: PayloadAction<number>) => {
      const contactIndex = state.contacts.findIndex(contact => contact.id === Number(payload))

      if (contactIndex > -1) {
        state.contacts.splice(contactIndex, 1)
      } else {
        state.error = "ERROR: missing contact ID."
      }
    },
    updateContact: (state, { payload }: PayloadAction<ContactInterface>) => {
      const contactIndex = state.contacts.findIndex(contact => contact.id === Number(payload.id))
      
      state.contacts[contactIndex] = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload
      state.isLoading = false
    })
    builder.addCase(fetchContacts.rejected, (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    })
  }
})

export const { addContact, removeContact, updateContact } = contactsSlice.actions

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', () => {
  return fetchContactsData()
})


export default contactsSlice.reducer
